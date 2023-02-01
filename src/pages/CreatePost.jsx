import React from 'react'
import { useState  } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db, auth } from '../firebase-config'
import { useNavigate } from 'react-router-dom'
import {  ref, uploadBytes  } from 'firebase/storage';
import { storage } from '../firebase-config';
import { v4 } from "uuid";

const CreatePost = ({isAuth}) => {
  //recupere les données des input du post
  const [ title, setTitle ] = useState("");
  const [ postText, setPostText ] = useState("");
  const [ file, setFile ] = useState(null);

  //connecte a la database
  const postCollectionRef = collection(db, "POST");
 
  let navigate = useNavigate()
  
  //upload l'image à Firebase storage
  

  //ajoute le post a la collection firebase
  const createPost = async () => {
    
  await addDoc(postCollectionRef, {
      imageUrl,
      title , 
      postText, 
      author : {name: auth.currentUser.displayName ,id: auth.currentUser.uid },//recupere les info de google
    });
    navigate("/")
  };
   
  

  return (
    <div className='createPostPage'>
      <div className='cpContainer'>
        <h1>Create a post</h1>
          <div className="inputGp">
            <label htmlFor="title">
              <input type="text" placeholder='title' onChange={(e) => {setTitle(e.target.value)}} />
            </label>
          </div>
          <div className="inputGp">
            <label htmlFor="post">
              <textarea name="post" id="post" cols="30" rows="10" placeholder='post' onChange={(e) => {setPostText(e.target.value)}} ></textarea>
            </label>
            <label htmlFor="image">
              <input type="file" onChange={(e) => {setFile(e.target.files[0])}} />
            </label>
            <button className='submit-button inputGp' onClick={createPost}>Submit post</button> 
          </div>
      </div>             
    </div>   
  )
}

export default CreatePost