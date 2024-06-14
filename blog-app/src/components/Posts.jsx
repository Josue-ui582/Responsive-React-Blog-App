import React from 'react'
import { useState } from 'react'

import Thumbail1 from '../images/Thumbail1.jpg'
import Thumbail2 from '../images/Thumbail2.jpg'
import Thumbail3 from '../images/Thumbail3.webp'
import Thumbail4 from '../images/Thumbail4.webp'
import PostItem from './PostItem'


const DUMMY_POSTS = [
    {
        id: '1',
        thumbail: Thumbail1,
        category: 'education',
        title: 'This is the title of the very third post on this blog',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa earum error illo iste fuga ab quasi, eum magni cupiditate vel distinctio recusandae, soluta expedita totam mollitia quae. Sed, doloremque vel!',
        authorID: 3
    },
    {
        id: '2',
        thumbail: Thumbail2,
        category: 'science',
        title: 'This is the title of the very third post on this blog',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa earum error illo iste fuga ab quasi, eum magni cupiditate vel distinctio recusandae, soluta expedita totam mollitia quae. Sed, doloremque vel!',
        authorID: 1
    },
    {
        id: '3',
        thumbail: Thumbail3,
        category: 'weather',
        title: 'This is the title of the very third post on this blog',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa earum error illo iste fuga ab quasi, eum magni cupiditate vel distinctio recusandae, soluta expedita totam mollitia quae. Sed, doloremque vel!',
        authorID: 13
    },
    {
        id: '4',
        thumbail: Thumbail4,
        category: 'farming',
        title: 'This is the title of the very third post on this blog',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa earum error illo iste fuga ab quasi, eum magni cupiditate vel distinctio recusandae, soluta expedita totam mollitia quae. Sed, doloremque vel!',
        authorID: 11
    },
]


const Posts = () => {
    const [posts, setPosts] = useState(DUMMY_POSTS)
  return (
    <section className='posts'>
        {
            posts.map(({id, thumbail, category, title, description, authorID}) => 
                    <PostItem key={id} postID={id} thumbail={thumbail} category={category} title={title} description={description} authorID={authorID} />)
        }
    </section>
  )
}

export default Posts