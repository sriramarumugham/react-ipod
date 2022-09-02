import React from 'react'

export default function ImageCotainer(props) {

  //custom display for settings and game pages ui
  
  return (
       <div style={{width:"100%" ,height:"100%"}}>
        <img src={props.src}  style={{width:"100%" ,height:"100%"}}/>
       </div>
  )
}
