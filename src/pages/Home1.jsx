import { useState, useEffect, useCallback } from 'react';
import { getDocs ,collection, deleteDoc, doc } from 'firebase/firestore'
import { auth, db } from '../firebase-config'

const Home = ({isAuth}) => {

const [ postLists, setPostList ] = useState([])

//connecte a la database
const postCollectionRef = collection(db, "POST");

//creer le post
const getPost = useCallback(async () => {
  const data = await getDocs(postCollectionRef);
    setPostList(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    console.log(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
  }, [postCollectionRef]);

//fonction qui delete le post
const deletePost =  async (id) => {
  const postDoc = doc(db, "POST", id);
  await deleteDoc(postDoc)
  setPostList(postLists.filter((post) => post.id !== id))
}

useEffect(() => {
  getPost()
}, []);

 

  return (

    <div className="homePage" >
      {postLists.map((post, index) => {
        return (
                <div key={index} className='post'>
                  <h2 className='post-title'>{post.title}</h2>
                  <p className='postText'>{post.postText}</p>
                  <img src={post.imageUrl} alt={post.title} />
                  <div>                  
                    {isAuth &&  post.author.id === auth.currentUser.uid && (
                      <button onClick={() => {deletePost(post.id)}}>
                        {" "}
                      &#128465;
                      </button>
                    )}
                  </div>
                  <h4>@{post.author.name}</h4>                  
                </div>
                );
      })}
    </div>

  )
}

export default Home