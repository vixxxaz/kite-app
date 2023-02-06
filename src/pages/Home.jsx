import { useState, useEffect, useCallback, useMemo } from 'react';
import { getDocs ,collection, deleteDoc, doc } from 'firebase/firestore'
import { auth, db } from '../firebase-config'

  
const Home = ({isAuth}) => {

    
    const deletePost = async (id) => {
        const postDoc = doc(db, "POST", id);
        try {
        await deleteDoc(postDoc)
        setPostLists(postLists.filter((post) => post.id !== id))
        // Ajoutez une animation de suppression ici
        } catch (error) {
        console.error(error)
        // Ajoutez une gestion d'erreur pour afficher un message d'erreur ici
        }
    };

    const [postLists, setPostLists] = useState([]);
    const postCollectionRef = useMemo(() => collection(db, "POST"), []);

    const getPost = useCallback(async () => {
      try {
        const data = await getDocs(postCollectionRef);
        setPostLists(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        console.log(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
      } catch (error) {
        console.error(error)
        // Ajoutez une gestion d'erreur pour afficher un message d'erreur ici
      }
    }, [postCollectionRef]);
  
    useEffect(() => {
        getPost();
    }, []);
  
    return (

      <div className="homePage">
        {postLists.length ? (
          postLists.map((post, index) => (
            <div key={index} className="post">
              <h2 className="post-title">{post.title}</h2>
              <p className="postText">{post.postText}</p>
              <img src={post.imageUrl} alt="" />
              <div>
                {isAuth && post.author.id === auth.currentUser.uid && (
                  <button onClick={() => deletePost(post.id)}>&#128465;</button>
                )}
              </div>
              <h4>@{post.author.name}</h4>
            </div>
          ))
        ) : (
          <p>Aucun post </p>  )}
          </div>
        )};

export default Home;

          