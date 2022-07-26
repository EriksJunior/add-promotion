import React from "react";

import './Row.scss'

interface IRow{
  children: JSX.Element[] | JSX.Element
}

export const Row: React.FC<IRow> = ({children}) =>{
  return(
    <div className='generalContainerRow w-full flex flex-wrap'>
      {children}
    </div>
  )
}