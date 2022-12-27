import React, { FC } from 'react'
import "./gif.scss";

interface GifProps{
    url:string;
}

const Gif:FC<GifProps> = ({url}) => {
  return (
    <div className='gif'>
        <img src={ url }>
        </img>
    </div>
  )
}

export default Gif;