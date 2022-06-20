
interface IButtonLogin{
  textButton: string;
  className: string;
  
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const ButtonLogin: React.FC<IButtonLogin> = ({textButton, onClick, className}) =>{
  return(
    <div>
      <button className={className} onClick={onClick}>{textButton}</button>
    </div>
  )
}