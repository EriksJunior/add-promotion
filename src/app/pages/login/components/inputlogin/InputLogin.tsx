

interface IInputLogin {
  label: string;
  type: string;
  name: string;
  value: string;

  onChange: (newValue: string) => void;
}

export const InputLogin: React.FC<IInputLogin> = (props) => {
  return (
    <div>
      <label>{props.label}</label>
      <input onChange={e => props.onChange(e.target.value)} type={props.type} value={props.value} name={props.name}></input>
    </div>
  );
}