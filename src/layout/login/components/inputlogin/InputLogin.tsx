import { InputHTMLAttributes } from "react";


export const InputLogin: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({...props}) => {
  return (
    <div className="flex flex-col justify-center w-full">
      <div>
        <input {...props}></input>
      </div>
    </div>
  );
}