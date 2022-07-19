import React from 'react'
import './RequestRegistration.scss'

interface IRequestRegistrationLayout{
  onClick: React.MouseEventHandler
}

export const RequestRegistrationLayout:React.FC<IRequestRegistrationLayout> = ({onClick}) => {
  return (
    <div className='generalContainer bg-cyan-600 shadow-lg shadow-cyan-500/50'>
        <p  onClick={onClick}>Tela de cadastro de login</p>
    </div>
  )
}