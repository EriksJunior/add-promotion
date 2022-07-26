import React from "react";

import './Input.scss'

interface IInput {
  type?: string
  placeholder?: string
  size?: string
  className?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  name?: string
  hidden?: boolean
}

export const Input: React.FC<IInput> = ({ type, placeholder, size, className, onChange, name, hidden }) => {
  return (
    <input className={className} hidden={hidden} type={type} name={name} placeholder={placeholder} onChange={onChange} style={{ width: size, height: '25px', marginRight: '15px', marginBottom: '15px', marginTop: '0px', maxWidth: '100%', minWidth: '20%', borderRadius: '0.125rem' }} />
  )
}