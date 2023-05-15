import React from 'react'
import "./share.css";
import {PermMedia,Label,Room,EmojiEmotions} from "@mui/icons-material";

export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
            <img className="shareProfileImg"src='assets/profiles/aliha.jpeg' slt=""></img>
            <input placeholder="What's in your mind" className='shareInput'></input>
        </div>
        <hr className='shareHr'/>
        <div className="shareBottom">
            <div className='shareOptions'>
                <PermMedia htmlColor='tomato' className="ShareIcon"/>
                <span className='shareOptionText'>Photo</span>
            </div>
            <div className='shareOptions'>
                <Label htmlColor='blue'  className="ShareIcon"/>
                <span className='shareOptionText'>Tag</span>
            </div>
            <div className='shareOptions'>
                <EmojiEmotions htmlColor='goldenrod'  className="ShareIcon"/>
                <span className='shareOptionText'>Feelings</span>
            </div>
            <div className='shareOptions'>
                <Room  htmlColor='green' className="ShareIcon"/>
                <span className='shareOptionText'>Location</span>
            </div>
       </div>
    </div>
    </div>
  )
}
