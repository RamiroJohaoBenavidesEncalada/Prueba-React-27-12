import { FC } from "react";
import "./input.scss";

interface InputProps {
  value: string;
  name: string;
  onChange: (value: string) => void;
  placeholder: string;
}

const Input: FC<InputProps> = ({ value, name, onChange, placeholder }) => {
  return (
    <input
      className="input"
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default Input;
