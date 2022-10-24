import React from 'react';
import { useState, useEffect } from 'react';
import { db } from '../FirebaseConfig';
import { collection, getDocs, addDoc } from 'firebase/firestore';

export default function PostCollection() {
  const [posts, setPosts] = useState([]);
  const postsRef = collection(db, 'posts')

  const [newTitle, setNewTitle] = useState('');
  const [newBody, setNewBody] = useState('');

  const createPost = async () => {
    await addDoc(postsRef, {title: newTitle, body: newBody})
  }

  useEffect(() => {

    const getPosts = async () => {
      const postdata = await getDocs(postsRef);
      setPosts(postdata.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(postdata);
      console.log(postdata.docs)
    };

    getPosts()
  }, [])

  return (

    <div className='post'>

      <div id='input-container'>
        <input placeholder="Title..." onChange={(event) => { setNewTitle(event.target.value) }}/>
        <input placeholder="Body..." onChange={(event) => { setNewBody(event.target.value) }} />
        <button onClick={createPost}>Submit</button>
      </div>

      {posts.map((post) => {
        return <div key={post.id}>
          <h1>Title: {post.title}</h1>
          <h2>Body: {post.body}</h2>
        </div>;
      })}
    </div>
  )
}


