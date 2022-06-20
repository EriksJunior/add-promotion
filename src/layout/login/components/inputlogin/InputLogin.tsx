

interface IInputLogin {
  label: string;
  type: string;
  name: string;
  value: string;
  className?: string;

  onChange: (newValue: string) => void;
}

export const InputLogin: React.FC<IInputLogin> = ({label, type, name, value, className, onChange}) => {
  return (
    <div className="flex flex-col w-full">
      <div className=" w-full mb-2 flex justify-center">
        <div className="w-2/3 flex justify-start">
          <label className="text-slate-200 font-bold text-lg">{label}</label>
        </div>
      </div>

      <div>
        <input className={className} onChange={e => onChange(e.target.value)} type={type} value={value} name={name}></input>
      </div>
    </div>
  );
}