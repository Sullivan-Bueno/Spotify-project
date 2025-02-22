import React from 'react'
import Player from '../components/Player'
import { Link, useParams } from 'react-router-dom'
import {songsArray} from "../assets/database/songs"
import { artistArray } from '../assets/database/artists'

const Song = () => {
  const { id } = useParams();
  // console.log(id)

  

  const {image, name, duration, artist, audio, index} = songsArray.filter(
    (currentSongObj) => currentSongObj.id === Number(id)
  )[0];
  // console.log(songObj)

  const artistObj = artistArray.filter(
    (currentArtistObj) => currentArtistObj.name === artist)[0];

  const songsArray2 = songsArray.map(
    (currentSongObj) => currentSongObj 
  );
  // console.log(songsArrayFromArtist)

   const randomIndex = Math.floor(Math.random() * (songsArray2.length - 1))
   const randomId = songsArray[randomIndex].id;

  return (
    <div className="song">
      <div className="song__container">
        <div className="song__image-container">
         <img src={image} alt={`Imagem da musica ${name}`} />
        </div>
      </div>
      <div className="song__bar">
        <div className="song__artist-image">
          <Link to={`/artist/${artistObj.id}`}>
          <img 
          width={75}
          height={75}
          src={artistObj.image} 
          alt={`Imagem do artista ${artist}	`} />
          </Link>
        </div>
        
        <Player duration={duration} randomId={randomId}/>

        <div>
          <p className="song__name">{name}</p>
          <p>{artist}</p>
        </div>
      </div>
    </div>
  )
}

export default Song
