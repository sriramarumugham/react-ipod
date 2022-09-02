import React from 'react'

export default function ImageCotainer(props) {
  return (
    <div style={{width:"100%" ,height:"100%"}}>
      <img src={props.src}  style={{width:"100%" ,height:"100%"}}/>
    </div>
  )
}
