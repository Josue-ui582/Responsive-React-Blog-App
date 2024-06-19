import React, { useState } from 'react'
import { DUMMY_POSTS } from '../data'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  const [posts, setPosts] = useState(DUMMY_POSTS)
  return (
    <div>
      <section className="dashboard">
        {
          posts.length ? <div className="container dashboard-container">
            {
              posts.map(post => {
                return <article key={post.id} className='dashboard__post'>
                  <div className="dashboard__post-info">
                    <div className="dashboard__post-thmbail">
                      <img src={post.thumbail} alt="" />
                    </div>
                    <h5>{post.title}</h5>
                  </div>
                  <div className="dashboard__post-actions">
                    <Link to={`/posts/${post.id}`} className='btn sm'>View</Link>
                    <Link to={`/posts/${post.id}/edit`} className='btn primary'>Edit</Link>
                    <Link to={`/posts/${post.id}/delete`} className='btn sm danger'>Delete</Link>
                  </div>
                </article>
              })
            }
          </div> : <h2 className='center'>You have no posts yet.</h2>
        }
      </section>
    </div>
  )
}

export default Dashboard
