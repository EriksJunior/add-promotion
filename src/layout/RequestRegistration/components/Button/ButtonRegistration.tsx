import React from 'react'

interface IButtonRegistration {
  textButton: string;
  className?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;

}

export const ButtonRegistration: React.FC<IButtonRegistration> = ({ textButton, className, onClick }) => {
  return (
    <button className={className} onClick={onClick}>{textButton}</button>
  )
}