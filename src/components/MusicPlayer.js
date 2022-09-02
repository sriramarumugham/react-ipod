import React, { Component, useEffect, useState } from 'react';
import styles from '../styles/musicplayer.module.css';

  const MusicPlayer =()=>  {

    const [length , setLength]=useState(0);
    const [musicTime , setMusicTime] =useState(0);
    const totalLength=5.30;
    useEffect(()=>{
     const interval =setInterval(()=>{
      if(length<=100){
      setLength(length+1);} 
      else{setLength(0)}
      setMusicTime( length/totalLength * 1000)
     } ,100)
  
     return ()=> clearInterval(interval);
    })
  
    return (
      <div className={styles.musicSession}>
        <div className={styles.songCover}>
            <div className={styles.songName}>Song Name.mp3</div>
            <div className={styles.songImgae}><img src="https://th.bing.com/th/id/R.8fcc6b9f1c5366bb29f71955069405d6?rik=Dj3XkSzMaOX8Vg&riu=http%3a%2f%2famassing2.sakura.ne.jp%2fimage%2fjacket%2flarge%2f2017%2f66718.jpg&ehk=S86RCjZLJcGevNLwYA5rFw%2fcywRNn0I4VnF6D2fTj8c%3d&risl=&pid=ImgRaw&r=0"/></div>
        </div>
        <div className={styles.songControlls}>
          <div className={styles.pausePlay}>
               {/* <p>{musicTime}</p> */}
               {/* <p>{totalLength}</p> */}
          </div>
          <div className={styles.songLength}>
            <div className={styles.lengthContainer} style={{width:`${length}%`}}></div>
            <div className={styles.playerHead}></div>
          </div>
        </div>
      </div>
    )
  
}
export default MusicPlayer
