import React from 'react'
import { MoreVert } from '@mui/icons-material';
import "./post.css";
import { Users } from '../../dummyData';
import { useState } from 'react';

function Post({post}) { 
  const [like,setLike] = useState(post.like)
  const [isLiked,setIsLike] = useState(false)
  const likeHandler=()=>
  {
    setLike(isLiked? like-1: like+ 1)
    setIsLike(!isLiked)
  }
  return (
    <div className='post'>
      <div className='postWrapper'>
      <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src={Users.filter(u=>u.id === post.userId)[0].profilePicture} alt=''/> 
            <span className='postUsername'>{Users.filter(u=>u.id === post.userId)[0].username}</span>
            <span className='postDate'>{post.date}</span>
      </div>
      <div className="postTopRight">
            <MoreVert />
          </div>
    </div>
    <div className="postCenter">
        <span className='PostText'>{post?.desc}</span>
        <img className='postImg' src={post.photo} alt=""/>
    </div>
    <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="assets/posts/like.png" onClick={likeHandler} alt="" />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <button className='buttonn'>Easy Apply</button>
            
          </div>
    </div>
    </div>
    </div>
  )
}

export default Post;
