import React from 'react';
import { useState, useEffect } from 'react';
import { db } from '../FirebaseConfig';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';

export default function PostCRUD() {
  const [posts, setPosts] = useState([]);
  const postsRef = collection(db, 'posts')

  const [newTitle, setNewTitle] = useState('');
  const [newBody, setNewBody] = useState('');

  const createPost = async () => {
    await addDoc(postsRef, { title: newTitle, body: newBody })
  }

  const updatePost = async (id, title, body) => {
    const postDoc = doc(db, "posts", id)
    const newFields = { title: newTitle, body: newBody }
    await updateDoc(postDoc, newFields)
  }

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id)
    await deleteDoc(postDoc)
  }

  const refresh = () => {
    setTimeout(function(){window.location.reload();},10);
  }

  useEffect(() => {

    const getPosts = async () => {
      const postData = await getDocs(postsRef);
      setPosts(postData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(postData);
      console.log(postData.docs)
    };

    getPosts()
  }, [])

  return (
    <>
      <div id='input-container'>
        <input id="title-input-dashboard" placeholder="Title..." onChange={(event) => { setNewTitle(event.target.value) }} />
        <textarea id="body-input-dashboard" placeholder="Body..." onChange={(event) => { setNewBody(event.target.value) }} />
        <button id="submit-dashboard" onClick={createPost} onSubmit>Submit Post</button>
      </div>

      <div id='post-wrapper'>
        {
          posts.map((post) => {
            return <div key={post.id} className="post-container">
              <div className='post-title'><p>{post.title}</p></div>
              <div className='post-body'><p>{post.body}</p></div>
              <div className='update-delete-container'>
                <input id="title-update-dashboard" placeholder="Title..." onChange={(event) => { setNewTitle(event.target.value) }} />
                <textarea id="body-update-dashboard" placeholder="Body..." onChange={(event) => { setNewBody(event.target.value) }} />
                <button className='post-update' onClick={updatePost} onSubmit={refresh}>Update Post</button>
                <button className='post-delete' 
                onClick={() => {deletePost(post.id)}}
                >Delete Post</button>
              </div>
            </div>;
          })
        }
      </div >
    </>
  )
}


