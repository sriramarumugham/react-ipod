import React, {  useEffect, useRef } from "react";
import styles from "../styles/musicplayer.module.css";

import { useDisplay } from "../Provider";


const MusicPlayer = () => {

  //custom hook import
  const display = useDisplay();
  const {
    isplaying,
    currentSong,
    setCurrentSong,
  } = display;

  const audioElem = useRef();
  
  useEffect(() => {

   //to check the user click on play ||  pause and changee the  song status  on every render

    if (isplaying) {
      audioElem.current.play();
    } else {
      audioElem.current.pause();
    }

  }, [isplaying]);
 
  // to change the length of the  songs length bar 

  const onPlaying = () => {
    const duration = audioElem.current.duration;
    const ct = audioElem.current.currentTime;

    setCurrentSong({
      ...currentSong,
      progress: (ct / duration) * 100,
      length: duration,
    });
  };

  return (
    <div className={styles.musicSession}>
      <audio src={currentSong.url} ref={audioElem} onTimeUpdate={onPlaying} />
        <div className={styles.songCover}>
          <div className={styles.songName}>{currentSong.title}</div>
          <div className={styles.songImgae}>
          <img src={currentSong.cover} />
        </div>
      </div>

      <div className={styles.songControlls}>
        <div className={styles.songLength}>
          <div
            className={styles.lengthContainer}
            style={{ width: `${currentSong.progress + "%"}` }}
          ></div>
          <div className={styles.playerHead}></div>
        </div>
      </div>
    </div>
  );
};
export default MusicPlayer;
