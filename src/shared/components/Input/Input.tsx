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
      <input className={className} type={type} placeholder={placeholder} style={{width: size, height: '25px', marginRight: '15px',  marginBottom: '15px', marginTop: '0px', maxWidth: '100%', minWidth: '20%', borderRadius: '0.125rem'}}/>
  )
}