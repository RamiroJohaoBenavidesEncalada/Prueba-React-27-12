import { FC } from "react";
import { Gif as GifInterface } from "../../../utils/interfaces/gif";
import GifCard from "../../molecules/gif-card/gif-card";
import "./gif-list.scss";

interface GifListProps {
  tasksList: GifInterface[];
  deleteGif: (id: number) => void;
}

const GifList: FC<GifListProps> = ({
  tasksList,
  deleteGif,
}) => {
  if (tasksList?.length === 0) return <p className="gifs-list__title gifs-list__title--noPosee">No posee gifs</p>;
  return (
    <div className="gifs-list">
      {tasksList.map((gif, index) => (
        <GifCard
          deleteGif={deleteGif}
          key={`gif-${index}`}
          gif={gif}
        />
      ))}
      
    </div>
  );
};
export default GifList;
