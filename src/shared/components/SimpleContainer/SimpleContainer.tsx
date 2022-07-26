import React from "react";

import './SimpleContainer.scss'

interface ISimpleContainer {
  children?: JSX.Element[] | JSX.Element
  className: string
}

export const SimpleContainer: React.FC<ISimpleContainer> = ({ children, className }) => {
  return (
    <div className={className}>
      {children}
    </div>
  )
}