import React, { Component, useEffect, useState, useRef } from "react";
import styles from "../styles/musicplayer.module.css";
import { songsdata } from "../Data/music";
import { useDisplay } from "../Provider";
// const display=useDisplay();
const MusicPlayer = () => {
  const display=useDisplay();
  // const [songs, setSongs] = useState(songsdata);
  // const [isplaying, setisplaying] = useState(false);
  // const [index , setIndex] =useState(0)
  // const [currentSong, setCurrentSong] = useState(songs[index]);


const {songs, setSongs , isplaying , setisplaying , mindex , setmIndex , currentSong , setCurrentSong  , prev , next}=display;


  const audioElem = useRef();

  useEffect(() => {
    if (isplaying) {
      audioElem.current.play();
    } else {
      audioElem.current.pause();
    }
  }, [isplaying]);

  console.log(isplaying)

  const onPlaying = () => {
    const duration = audioElem.current.duration;
    const ct = audioElem.current.currentTime;

    setCurrentSong({
      ...currentSong,
      progress: (ct / duration) * 100,
      length: duration,
    });
    
  };
  
  const length=songs.length;
  
  // const next=()=>{
  //   console.log("hey")
  //   if(mindex<length-1){
  //     setmIndex(mindex+1);
  //     setCurrentSong(songs[mindex]);
  //     currentSong.progress =0;
  //     audioElem.current.currentTime = 0;
  //     setisplaying(false);
      
  //   }
  //   else{
  //     setmIndex(0)
  //     setCurrentSong(songs[mindex]);
  //     currentSong.progress =0;
  //     audioElem.current.currentTime = 0;
  //     setisplaying(false);
  //   }
   

  // }
  // const prev=()=>{
  //   console.log("hey")
  //   if(mindex==0){
  //     setmIndex(length-1);
  //     setCurrentSong(songs[mindex])
  //     currentSong.progress =0;
  //     audioElem.current.currentTime = 0;
  //     setisplaying(false);
      
  //   }
  //   else{
  //     setmIndex(mindex-1);
  //     setCurrentSong(songs[mindex])
  //     currentSong.progress =0;
  //     audioElem.current.currentTime = 0;
  //     setisplaying(false);
  
  //   }
   
  // }
 
  return (
    <>

     
      
     <div className={styles.musicSession}>
    <audio src={currentSong.url} ref={audioElem} onTimeUpdate={onPlaying} />
        <div className={styles.songCover}>
            <div className={styles.songName}>{currentSong.title}</div>
            <div className={styles.songImgae}><img src={currentSong.cover}/></div>
        </div>
        <div className={styles.songControlls}>
         
          <div className={styles.songLength}>
            <div className={styles.lengthContainer}style={{ width: `${currentSong.progress + "%"}` }}></div>
            <div className={styles.playerHead}></div>
          </div>
        </div>
      </div>

   </>
  );
};
export default MusicPlayer;
