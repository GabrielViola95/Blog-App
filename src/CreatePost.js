import React, { useEffect, useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db, auth } from './firebase-config'
import { useNavigate } from 'react-router-dom'

const CreatePost = ({isAuth}) => {
  const [title, setTitle] = useState("")
  const [postText, setPostText] = useState("")


  const postsCollectionRef = collection(db, "post");

  let navigate = useNavigate();

  const createPost = async () => {
    await addDoc(postsCollectionRef, { title, postText, author: { name: auth.currentUser.displayName, id: auth.currentUser.uid }
     });
     navigate('/')
  };

  useEffect(() => {
    if(!isAuth){
     navigate('/')
    }
  }, [])

  return (
    <div className='createPostPage'>
      <div className='cpContainer'>
        <h1>Crear una Publicación</h1>
        <div className='inputGp'>
          <label htmlFor="">Título:</label>
          <input type="text" placeholder='Título' onChange={(e)=>{setTitle(e.target.value)}} />
        </div>
        <div className='inputGp'>
          <label htmlFor=""> Publicación</label>
          <textarea name="post" cols="30" rows="10" placeholder='¿Qué deseas compartir?' onChange={(e)=>{setPostText(e.target.value)}}></textarea>
        </div>
        <button onClick={createPost}>Publicar</button>
      </div>
    </div>
  )
}

export default CreatePost