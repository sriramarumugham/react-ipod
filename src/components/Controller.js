import React, { useEffect, useRef, useState } from "react";
import { useDisplay } from "../Provider";
import style from "../styles/controll.module.css";
import ZingTouch from "zingtouch";

const Controller = () => {
  const [direction, setDirection] = useState(0);
  const display=useDisplay();

const {changeActiveUp  ,changeActiveDown ,  activeElement ,activeIndex }=display;
  

  useEffect(() => {
    var zt = new ZingTouch.Region(document.body);
    var myElement = document.getElementById("Controller");


    zt.bind(
      myElement,
      "rotate",
      function (e) {
        const angle = Math.floor(e.detail.angle);

        const distanceFromLast = Math.floor(e.detail.distanceFromLast);

        const distanceFromOrigin = Math.floor(e.detail.distanceFromOrigin);

        if (angle <= 180 && angle >= 0) {
          if (angle % 5 == 0) {
            if (distanceFromLast > 0) {
              console.log("up");
               changeActiveUp();
              

            }
             if(distanceFromLast <0) {
              console.log("down");
              return changeActiveDown();
            }
          }
        }
      },
      false
    );
    // const unbind=()=>{
    //  zt.unbind(myElement, 'rotate');
    // }
  } );

  return (
    <div>
      <div id="Controller" className={style.contollcontainer} draggable={false}>
        <div className={style.row}>
        
        

         <button className= {style.button} onClick={display.prev} >  <i class="fa-solid fa-angle-left"></i></button>
         <button className= {style.button}  onClick={display.next} >  <i class="fa-solid fa-chevron-right"></i></button>
      
        </div>
        <div className={style.column}>
          <button  className= {style.button} onClick={display.goTomenu }><i class="fa-solid fa-bars"></i></button>
          <button   className= {style.button}  onClick={display.goBack}><i class="fa-solid fa-backward-step"></i> </button>
        </div>
        <button className={style.select} onClick={(e)=>{display.Changedisplay( activeElement , activeIndex); display.setisplaying(!display.isplaying) }} ><i class="fa-solid fa-play"></i> </button>
      </div>
    </div>
  );
};
export default Controller;
{/* <button onClick={() => {setisplaying(!isplaying);}}>play</button>    */}
// display.Changedisplay( activeElement , activeIndex)