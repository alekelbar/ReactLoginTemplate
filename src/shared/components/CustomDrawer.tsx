import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useAppDispatch, useAppSelector } from '../../redux/hooks.redux';
import { Link as LinkRouter } from 'react-router-dom';
import { routes } from '../../router/routes';

// ICONS
import {
  Logout,
  PointOfSale,
  ShoppingBag,
  Dashboard,
  Inventory,
  Paid,
  SupervisedUserCircle,
  ProductionQuantityLimits,
} from '@mui/icons-material';
import { unsetLoginCredentials } from '../../redux/Slices/auth/login.slice';
import { EUserRoles } from '../../utilities/user.roles';
import { NotShowIf } from '../../utilities/NotShowIf';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));


type DrawerProps = {
  children: JSX.Element
}


export const CustomDrawer: React.FC<DrawerProps> = ({
  children
}) => {

  const { roles } = useAppSelector(s => s.loginReducer);

  const {
    apiCredentials
  } = useAppSelector(state => state.loginReducer);

  const dispatch = useAppDispatch();

  const handleLogOut = () => {
    dispatch(unsetLoginCredentials());
  }

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const userHasRole = (requiredRoles: string[]) => {
    return requiredRoles.some(r => roles.includes(r));
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {apiCredentials?.email}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>

          <NotShowIf notShowIf={!userHasRole([EUserRoles.ADMIN])}>
            <LinkRouter to={routes.DASHBOARD} style={{ textDecoration: 'inherit', color: 'inherit' }}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {/* icono... */}
                    <Dashboard />
                  </ListItemIcon>
                  <ListItemText primary={"Dashboard"} />
                </ListItemButton>
              </ListItem>
            </LinkRouter>
          </NotShowIf>

          <NotShowIf notShowIf={!userHasRole([EUserRoles.ADMIN])}>
            <LinkRouter to={routes.PRODUCTS} style={{ textDecoration: 'inherit', color: 'inherit' }}>
              <ListItem disablePadding>
                <ListItemButton disabled={!userHasRole([EUserRoles.ADMIN])}>
                  <ListItemIcon>
                    {/* icono... */}
                    <ProductionQuantityLimits />
                  </ListItemIcon>
                  <ListItemText primary={"Productos"} />
                </ListItemButton>
              </ListItem>
            </LinkRouter>
          </NotShowIf>

          <NotShowIf notShowIf={!userHasRole([EUserRoles.ADMIN])}>
            <LinkRouter to={routes.CHECKOUT} style={{ textDecoration: 'inherit', color: 'inherit' }}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {/* icono... */}
                    <PointOfSale />
                  </ListItemIcon>
                  <ListItemText primary={"Cajas"} />
                </ListItemButton>
              </ListItem>
            </LinkRouter>
          </NotShowIf>

          <NotShowIf notShowIf={!userHasRole([EUserRoles.ADMIN, EUserRoles.SELLER])}>
            <LinkRouter to={routes.SALES} style={{ textDecoration: 'inherit', color: 'inherit' }}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {/* icono... */}
                    <ShoppingBag />
                  </ListItemIcon>
                  <ListItemText primary={"Ventas"} />
                </ListItemButton>
              </ListItem>
            </LinkRouter>
          </NotShowIf>

          <NotShowIf notShowIf={!userHasRole([EUserRoles.ADMIN])}>
            <LinkRouter to={routes.STOCK} style={{ textDecoration: 'inherit', color: 'inherit' }}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {/* icono... */}
                    <Inventory />
                  </ListItemIcon>
                  <ListItemText primary={"Stock"} />
                </ListItemButton>
              </ListItem>
            </LinkRouter>
          </NotShowIf>


          <NotShowIf notShowIf={!userHasRole([EUserRoles.ADMIN])}>
            <LinkRouter to={routes.TRANSACTION} style={{ textDecoration: 'inherit', color: 'inherit' }}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {/* icono... */}
                    <Paid />
                  </ListItemIcon>
                  <ListItemText primary={"Transacciones"} />
                </ListItemButton>
              </ListItem>
            </LinkRouter>
          </NotShowIf>


          <NotShowIf notShowIf={!userHasRole([EUserRoles.ADMIN])}>
            <LinkRouter to={routes.USERS} style={{ textDecoration: 'inherit', color: 'inherit' }}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {/* icono... */}
                    <SupervisedUserCircle />
                  </ListItemIcon>
                  <ListItemText primary={"Usuarios"} />
                </ListItemButton>
              </ListItem>
            </LinkRouter>
          </NotShowIf>

        </List>

        <Divider />
        <List>

          <ListItem disablePadding>
            <ListItemButton onClick={handleLogOut}>
              <ListItemIcon>
                {/* icono... */}
                <Logout />
              </ListItemIcon>
              <ListItemText primary={"Salir"} />
            </ListItemButton>
          </ListItem>

        </List>
      </Drawer>
      <Main open={open}>
        {children}
      </Main>
    </Box>
  );
}
