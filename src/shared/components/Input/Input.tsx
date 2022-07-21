import React from "react";

import './Input.scss'

interface IInput {
  type?: string
  placeholder?: string
  size?: string
  className: string
}

export const Input: React.FC<IInput> = ({type, placeholder, size, className }) => {
  return (
      <input className={className} type={type} placeholder={placeholder} style={{width: size, textAlign: "center", height: '35px', margin: '15px', maxWidth: '100%', minWidth: '20%', borderRadius: '0.125rem'}}/>
  )
}