import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import avatar6 from '../images/avatar6.jpg'
import { FaEdit } from 'react-icons/fa'
import { FaCheck } from 'react-icons/fa'

const UserProfil = () => {
  const [avatar, setAvatar] = useState(avatar6)
  return (
    <section className="profile">
      <div className="container profile__container">
        <Link to={`/myposts/sdfsdf`} className='btn'>My posts</Link>
        <div className="profile__details">
          <div className="avatar__wrapper">
            <div className="profile__avatar">
              <img src={avatar6} alt="" />
            </div>
            {/* Form to update avatar*/}
            <form className='avatar__form'>
              <input type="file" name='avatar' id='avatar' onChange={e => setAvatar(e.target.files[0])} accept='png, jpg, jpeg' />
              <label htmlFor="avatar"><FaEdit /></label>
            </form>
            <button className='profile__avatar-btn'><FaCheck /></button>
          </div>
          <h1>Ernest Achiever</h1>

          {/* form to update user details*/}
          <form className='form profile__form'>
            <p className='form__error-message'>
              This is an error message
            </p>
            <input type="text" />
          </form>
        </div>
      </div>
    </section>
  )
}

export default UserProfil