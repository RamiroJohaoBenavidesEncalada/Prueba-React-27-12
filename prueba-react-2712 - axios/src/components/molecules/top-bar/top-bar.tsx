import { FC } from "react";
import Button from "../../atoms/button/button";
import Input from "../../atoms/input/input";
import "./top-bar.scss";

interface TopBarProps {
  value: string;
  handleChange: (value: string) => void;
  addGif: () => void;
}

const TopBar: FC<TopBarProps> = ({ value, handleChange, addGif }) => {
  return (
    <div className="top-bar">
      <Input
        value={value}
        name="title"
        onChange={handleChange}
        placeholder="Gift Url"
      />
      <Button onClick={addGif} >
        Agregar
      </Button>
    </div>
  );
};

export default TopBar;
