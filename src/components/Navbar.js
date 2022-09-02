import React from "react";
import styles from "../styles/navbar.module.css";
import navdata from "../Data/navdata";
import { useDisplay } from "../Provider";
import MusicPlayer from "./MusicPlayer";
import Producer from "./Producer";
import ImageCotainer from "./ImageCotainer";
import { useState } from "react";

export default function Navbar() {
  
  const { index , changeLimit  , limit  , active} = useDisplay();

  //navbar check the type of the  data user clicks and navigate to the array[index] based on the value of the button

  if (navdata[index].type === "nav") {

    changeLimit ( navdata[index].data.length); 

    return (

      <div className={styles.navbar}>
        <h4 style={{ margin: "0px" }}> {navdata[index].title}</h4>
        {navdata[index].data.map((d, i) => {
          const isActive=active==i;
          return <Producer data={d} index={index}  isActive={isActive}  key={i}/>;
        })}
      </div>

    );
  } 
  else if (navdata[index].type === "music") {
    return <MusicPlayer />;
  } 
  
  else if (navdata[index].type === "game" ||navdata[index].type === "settings") {
  
    return <ImageCotainer src={navdata[index].src} />;
  }

  return;
}
