import React from 'react'

interface ILabel{
  text: string;

  children: JSX.Element[] | JSX.Element,
}
export const LabelLogin: React.FC<ILabel> = ({text, children}) => {
  return (
    <div className="flex flex-col justify-center w-full">
      <div className=" w-full mb-2 flex justify-center">
        <div className="w-2/3 flex justify-start">
          <label className="text-slate-200 font-bold text-lg">{text}</label>
        </div>
      </div>
      {children}
    </div>
  );
}