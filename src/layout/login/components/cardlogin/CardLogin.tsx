
interface ICardLogin {
  children: JSX.Element[] | JSX.Element,
}

import './CardLogin.scss'

export const CardLogin: React.FC<ICardLogin> = ({ children }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center rounded-2xl bg-zinc-900 h-full bg-cyan-600 shadow-lg shadow-cyan-500/50">
      {children}
    </div>
  )
}