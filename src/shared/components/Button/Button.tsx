import React from 'react'
import './Button.scss'

interface IButton{
  textButton: string;
  className?: string;
  
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button: React.FC<IButton> = ({textButton, onClick, className}) =>{
  return(
      <button className={className} onClick={onClick}>{textButton}</button>
  )
}