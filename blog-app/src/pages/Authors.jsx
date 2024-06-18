import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import avatar1 from '../images/avatar1.jpg'
import avatar2 from '../images/avatar2.jpg'
import avatar3 from '../images/avatar3.jpg'
import avatar4 from '../images/avatar4.jpg'
import avatar5 from '../images/avatar5.jpg'

const authorsData = [
  {id: 1, avatar: avatar1, name: 'Enerst Achiever', posts: 3},
  {id: 2, avatar: avatar2, name: 'Jane Doe', posts: 5},
  {id: 3, avatar: avatar3, name: 'Dramani Mahama', posts: 0},
  {id: 4, avatar: avatar4, name: 'Nana Addo', posts: 2},
  {id: 5, avatar: avatar5, name: 'Hajia Bintu', posts: 1}
]


const Authors = () => {
  const [authors, setAuthors] = useState(authorsData)

  return (
   <section className='authors'>
    {authors.length > 0 ? <div className="container authors__container">
      {
        authors.map(({id, avatar, name, posts}) => {
          return <Link key={id} to={`/posts/users/${id}`} className='author'>
            <div className="authors__avatar">
              <img src={avatar} alt={`Image of ${name}`} />
            </div>
             <div className="author__info">
              <h4>{name}</h4>
              <p>{posts}</p>
             </div>
          </Link>
        })
      }
    </div> : <h2 className='center'>No users/authors found.</h2>}
   </section>
  )
}

export default Authors
