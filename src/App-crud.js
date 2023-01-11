import { useState, useEffect, useCallback } from "react";
import './App.css';
import Auth from "./Auth";
import { db } from "./firebase-config";
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore";
import Login from "./Login";

function App() {

  // const [ newName, setNewName ] = useState("");
  // const [ newEmail, setNewEmail ] = useState("");
  // const [ newAge, setNewAge ] = useState(0);

  // const [users, setUsers] = useState([]);
  // const userCollectionRef = collection(db, "users");

  // // create function to set up the new user
  // const createUser = async () => {
  //   await addDoc( userCollectionRef,  { name: newName, age: Number(newAge), email: newEmail } )
  //   console.log(newName)
  // }

  // const getUsers = useCallback(async () => {
  //   const data = await getDocs(userCollectionRef);
  //   setUsers(data.docs.map((doc) =>({
  //     ...doc.data(), id: doc.id
  //   })))
  // }, [userCollectionRef]);
  
  // //function pour update user
  // const updateUser = async (id, age) => {
  //   const userDoc = doc(db, "users", id)
  //   const newFields = {age: age + 1}
  //   await updateDoc(userDoc, newFields)
  // }
  // //function pour delete user
  // const deleteUser = async (id) => {
  //   const userDoc = doc(db, "users", id)
  //   await deleteDoc(userDoc)
  // }

  // useEffect(() => {
  //     getUsers()
  //   }, []);
  return (
    <>
    <Auth />
    <Login />
    {/* <div className="App">
      <h1>users</h1>
      {users.map((user) => {
        return (
          <div>
            {" "}
            <h2>name: {user.name}</h2>
            <h2>email: {user.email}</h2>
            <h2>age: {user.age}</h2>
            <button onClick={() => {updateUser(user.id, user.age) }}> Increase age </button>
            <button onClick={() => {deleteUser(user.id) }}> delete user</button>
        
          </div>
        )
      })}
      <form>
        <input placeholder="name" onChange={(e) => {setNewName(e.target.value)}}></input>
        <input placeholder="email" onChange={(e) => {setNewEmail(e.target.value)}}></input>
        <input type="number" placeholder="age" onChange={(e) => {setNewAge(e.target.value)}}></input>
        <button onClick={createUser}>Create user</button>
      </form>
    </div> */}
    </>
  );
}

export default App;
