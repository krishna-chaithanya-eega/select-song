import React from 'react';
import {  useSelector } from "react-redux";

const SongDetail = () => {

  const song=useSelector(state=>state.selectedSong)

  if(!song){
    return <div>Select a Song</div>
  }
  return (
    <div>
      <h2>Details of song</h2>
      <h4>Title :{song.title}
      <br/>
      Duration :{song.duration}</h4>
    </div>
  )
    
};
export default SongDetail;
