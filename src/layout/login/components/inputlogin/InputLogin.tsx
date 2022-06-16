

interface IInputLogin {
  label: string;
  type: string;
  name: string;
  value: string;
  class?: string;

  onChange: (newValue: string) => void;
}

export const InputLogin: React.FC<IInputLogin> = (props) => {
  return (
    <div className="flex flex-col w-full">
      <div className=" w-full mb-2 flex justify-center">
        <div className="w-2/3 flex justify-start">
          <label className="text-slate-200 font-bold text-lg">{props.label}</label>
        </div>
      </div>

      <div>
        <input className={props.class} onChange={e => props.onChange(e.target.value)} type={props.type} value={props.value} name={props.name}></input>
      </div>
    </div>
  );
}