import React from 'react'

interface IButtonLogin{
  textButton: string;
  className?: string;
  
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const ButtonLogin: React.FC<IButtonLogin> = ({textButton, onClick, className}) =>{
  return(
      <button className={className} onClick={onClick}>{textButton}</button>
  )
}