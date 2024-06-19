import React, { useState } from 'react'


const CreatePost = () => {
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('Uncategorized')
  const [description, setDescription] = useState('')
  const [thumbail, setThumbail] = useState('')

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['client']
    ],
  }


  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ]

  const POST_CATEGORIES = ["Agriculture", "Business", "Education", "Entertaiment", "Art", "Investment", "Uncategorized", "Weather"]

  return (
    <section className="create-post">
      <div className="container">
        <h2>Create Post</h2>
        <p className='form__error-message'>
          This is an error message
        </p>
        <form className="form create-post__form">
          <input type="text" placeholder='Title' value={title} onChange={e => setTitle(e.target.value)} autoFocus />
          <select name="category" value={category} onChange={e => setCategory(e.target.value)}>
            {
              POST_CATEGORIES.map(cat => <option key={cat}>{cat}</option>)
            }
            <input type="file" onChange={e => setThumbail(e.target.files[0])} accept='png, jpg, jpeg' />
            <button type='submit' className='btn primary'>Create</button>
          </select>
        </form>
      </div>
    </section>
  )
}

export default CreatePost
