import React from "react";
import './ContentLabel.scss'

interface ILabel {
  children: JSX.Element[] | JSX.Element
  textLabel?: string
}
export const ContentLabel: React.FC<ILabel> = ({ children, textLabel }) => {
  return (
    <div className="labelFloat w-2/4 flex flex-col flex-wrap">
      <div style={{ display: 'flex', justifyContent: 'start',  width:'93%', fontSize: '13px' }}>
        <label>{textLabel}</label>
      </div>

        {children}
    </div>
  )
}