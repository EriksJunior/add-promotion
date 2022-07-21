import React from "react";

import './Column.scss'

interface IColumn{
  children?: JSX.Element[] | JSX.Element
  ColSize?: string
  
}

export const Column: React.FC<IColumn> = ({children, ColSize}) =>{
  return(
    <div  style={{width: ColSize}}>
      {children}
    </div>
  )
}