import React from "react";

interface ICard {
  className: string
  children: JSX.Element[] | JSX.Element,
}

export const Card: React.FC<ICard> = ({className, children}) => {
  return (
    <div className={className}>
      {children}
    </div>
  )

}