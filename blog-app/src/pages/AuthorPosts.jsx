import React from 'react'
import { useState } from 'react'
import { DUMMY_POSTS } from '../data'
import PostItem from '../components/PostItem'

const AuthorPosts = () => {
  const [posts, setPosts] = useState(DUMMY_POSTS)
  return (
    <section className='posts'>
      {posts.length > 0 ? <div className="container posts__container">
          {
              posts.map(({id, thumbail, category, title, desc, authorID}) => 
                      <PostItem key={id} postID={id} thumbail={thumbail} category={category} title={title} description={desc} authorID={authorID} />)
          }
      </div> : <h2 className='center'>No posts founds</h2>}
    </section>
  )
}

export default AuthorPosts
