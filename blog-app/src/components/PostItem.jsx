import React from 'react'
import { Link } from 'react-router-dom'
import PostAuthor from './PostAuthor'

const PostItem = ({postID, category, title, description, authorID, thumbail}) => {
    const shortDescription = description.length > 130 ? description.substr(0, 130) + '...' : description;
    const postTitle = title.length > 20 ? title.substr(0, 20) + '...' : title;
      return (
    <article className="post">
        <div className="post__thumbnail">
            <img src={thumbail} alt={title} />
        </div>
        <div className="post__content">
            <Link to={`posts/${postID}`}>
                <h3>{postTitle}</h3>
            </Link>
            <p>{shortDescription}</p>
            <div className="post__footer">
                <PostAuthor />
                <Link to={`/posts/categories/${category}`} className='btn category'>{category}</Link>
            </div>
        </div>
    </article>
  )
}

export default PostItem