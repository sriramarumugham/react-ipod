import React from 'react';
import { useDisplay } from '../Provider';
import  style from '../styles/producer.module.css';

export default function Producer(props) {
   
   //export the menu button based on the props from navbar;

    const data=props.data;
    const index=props.index;
    const isActive=props.isActive;

    const display=useDisplay();
    if(isActive){
      display.setactiveIndex(index)
      display.setActiveElement(data.value)
    }
    
   
  return (
    <button  
     className={isActive ?  `${style.button}${style.active}` :  `${style.button}`}
     onClick={(e)=>{display.Changedisplay(data.value , index)}}>{data.name}</button>
  )
}



