
type DoNotShowIfProps = {
  notShowIf: boolean;
  children: JSX.Element | JSX.Element[]
}


export const NotShowIf: React.FC<DoNotShowIfProps> = ({
  notShowIf,
  children
}) => {
  return (
    <>
      {notShowIf ? null : children}
    </>
  )
}