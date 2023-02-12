import React, { useEffect } from 'react'
import { useState  } from 'react'
import { addDoc, collection, collectionGroup } from 'firebase/firestore'
import { db, auth, sparkyRef } from '../firebase-config'
import { useNavigate } from 'react-router-dom'
import { getDownloadURL, ref, uploadBytesResumable  } from 'firebase/storage';
import { storage } from '../firebase-config';


const CreatePost = ({isAuth}) => {

  //recupere les données des input du post
  const [ title, setTitle ] = useState("");
  const [ postText, setPostText ] = useState("");
  const [ file, setFile ] = useState(null);
  const [ data, setData ] = useState({});
  const [pers , setPers] = useState(null)


  //connecte a la database
  const postCollectionRef = collection(db, "POST");
 
  let navigate = useNavigate()
  //importe l image
  useEffect(()=>{

    const uploadFile = () =>{

      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, file.name);
      
      const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on('state_changed', 
          (snapshot) => {           
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            setPers(progress)
            switch (snapshot.state) {
              case 'paused':
                console.log('Upload is paused');
                break;
              case 'running':
                console.log('Upload is running');
                break;
                default:
                  break;
            }
          }, 
          (error) => {
            console.log(error);
          }, 
          () => {
            
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              setData((prev) => ({ ...prev, img: downloadURL }))
            });
          }
        );

          }
          file && uploadFile()
        },[file])

        //je recupere l'adresse de l image
        let imageUrl = data.img;
        
      
        //ajoute le post a la collection firebase
        const createPost = async () => {
          
          await addDoc(postCollectionRef, {
            imageUrl,
            title,
            postText,             
            author: { name: auth.currentUser.displayName, id: auth.currentUser.uid }, //recupere les info de google     
          });
          navigate("/");
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
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            <button disabled={pers != null && pers < 100} className='submit-button inputGp' onClick={createPost}>Submit post</button> 
          </div>
      </div>             
    </div>   
  )
}

export default CreatePost
