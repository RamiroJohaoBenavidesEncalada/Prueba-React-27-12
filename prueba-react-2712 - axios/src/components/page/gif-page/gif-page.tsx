import React, { useEffect, useState } from "react";
import { Gif as GifInterface } from "../../../utils/interfaces/gif";
import GifTList from "../../templates/gif-t-list/gif-t-list";
import clientHttp from "../axios/axios";


const GifPage = () => {
  const [gifsList, setGifsList] = useState<GifInterface[]>([]);
  const [url, setUrl] = useState("");
  const [error, setError] = useState(false);
  const handleChangeUrl = (value: string) => {
    setUrl(value);
  };

  const addGif = () => {
    const newGif: GifInterface = {
      id: Math.floor(Math.random() * 1000),
      url: url,
    }

    clientHttp({
      method: "post",
      url: "/?id_author=1010",
      headers: {
        "Content-Type": "application/json",
      },
      data: newGif
    }).then(response => {
      if (response.data.success) {
        handleGet();
        setError(false);
      } else {
        setError(true);
      }
    })
      .catch(error => console.log(error));<
  };

  const deleteGif  = (id: number) => {
    clientHttp({
        method: "delete",
        url: `/${id}`
    })
    
}

  const handleGet = () => {
    clientHttp({
      method: "get",
      url: "?id_author=1010",
    })
      .then(response => {
        if (response.data.success) {
          setGifsList(response.data.data);
        }
      })
      .catch(error => console.log(error));
  }

  useEffect(() => {
    handleGet();
  },
    []
  );
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
