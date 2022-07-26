import React from "react";
import './ContentLabel.scss'

interface ILabel {
  children: JSX.Element[] | JSX.Element
  textLabel?: string
  size?: string
}
export const ContentLabel: React.FC<ILabel> = ({ children, textLabel, size }) => {
  return (
    <div className=" w-2/4 flex flex-col flex-wrap justify-start" style={{width: size}}>
      <div className="labelFloat" style={{ display: 'flex', justifyContent: 'start',  width:'93%', fontSize: '13px' }}>
        <label>{textLabel}</label>
      </div>

        {children}
    </div>
  )
}