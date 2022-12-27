import { FC, useState } from "react";
import { Gif as GifInterface}  from "../../../utils/interfaces/gif";
import Button from "../../atoms/button/button";
import Gif from "../../atoms/gif/gif";
import "./gif-card.scss";

interface GifCardProps {
  gif: GifInterface;
  deleteGif: (id: number) => void;
}

const GifCard: FC<GifCardProps> = ({
  gif,
  deleteGif,
}) => {

  return (
    <div className="gif">
      <Gif url={gif.url}></Gif>
      <Button onClick={() => deleteGif(gif.id)} variant="primary">Eliminar</Button>
    </div>
  );
};

export default GifCard;
