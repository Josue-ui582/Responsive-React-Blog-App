import React from 'react'
import { Link } from 'react-router-dom'
import avatar from '../images/avatar.jpg'

const PostAuthor = () => {
  return (
    <Link to={`/post/users/sdfsdf`} className='post__author'>
      <div className='post__author-avatar'>
        <img src={avatar} alt="" />
      </div>
      <div className="post__author-details">
        <h5>By: Ernest Achiver</h5>
        <small>Just Now</small>
      </div>
    </Link>
  )
}

export default PostAuthor