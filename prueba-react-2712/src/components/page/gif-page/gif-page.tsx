import React, { useState } from "react";
import { Gif as GifInterface} from "../../../utils/interfaces/gif";
import GifTList from "../../templates/gif-t-list/gif-t-list";

const GifPage = () => {
  const [gifsList, setGifsList] = useState<GifInterface[]>([]);
  const [url, setUrl] = useState("");

  const handleChangeUrl = (value: string) => {
    setUrl(value);
  };

  const addGif = () => {
    const newGif: GifInterface = {
      id: Math.floor(Math.random() * 1000),
      url: url,
    };
    setGifsList([...gifsList, newGif]);
    setUrl("");
  };

  const deleteGif = (id: number) => {
    setGifsList(gifsList.filter((task) => task.id !== id));
  };

  return (
    <GifTList 
      gifsList={gifsList}
      url={url}
      handleChangeTitle={handleChangeUrl}
      addGif={addGif}
      deleteGif={deleteGif}
    />
  );
};

export default GifPage;
