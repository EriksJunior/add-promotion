
interface ICardLogin {
  children: JSX.Element,
}

export const CardLogin: React.FC<ICardLogin> = ({children}) =>{
  return (
  <div className="w-1/3 bg-slate-400 h-1/3">
    {children}
  </div>
  )
}