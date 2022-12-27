import { FC } from "react";
import { Gif as GifInterface} from "../../../utils/interfaces/gif";
import TopBar from "../../molecules/top-bar/top-bar";
import GifList from "../../organisms/gifs-list/gif-list";
import "./gif-t-list.scss";

interface GifTListProps {
  gifsList: GifInterface[];
  url: string;
  handleChangeTitle: (value: string) => void;
  addGif: () => void;
  deleteGif: (id: number) => void;
}

const GifTList: FC<GifTListProps> = ({
  gifsList,
  url,
  handleChangeTitle,
  addGif,
  deleteGif,
}) => {
  return (
    <div className="gift-t-list">
      <h1 className="gift-t-list__title">Gif Galery</h1>
      {url.length === 0 && <h1>No puedes agregar un Gif sin una Url</h1>}
      <TopBar
        value={url}
        handleChange={handleChangeTitle}
        addGif={addGif}
      />
      <GifList
        tasksList={gifsList}
        deleteGif={deleteGif}
      />

    </div>
  );
};

export default GifTList;
