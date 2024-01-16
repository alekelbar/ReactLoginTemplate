import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ThemeConfigProvider } from './configuration/theme.config.tsx'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ReduxProvider } from './redux/ReduxProvider.tsx'
import { AppRouter } from './router/router.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReduxProvider>
      <ThemeConfigProvider>
        <AppRouter />
      </ThemeConfigProvider>
    </ReduxProvider>
  </React.StrictMode>,
)
