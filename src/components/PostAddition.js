import React from 'react';
import { useState, 
    // useEffect 
} from 'react';
import { db } from '../FirebaseConfig';
import { collection, 
    // getDocs, 
    addDoc } from 'firebase/firestore';

export default function PostAddition() {
    const [posts, setPosts] = useState([]);
    const postsRef = collection(db, 'posts')

    const [newTitle, setNewTitle] = useState('');
    const [newBody, setNewBody] = useState('');

    const createPost = async () => {
        await addDoc(postsRef, { title: newTitle, body: newBody });
    }

    return (
        <div id='submit-container'>
            <input placeholder="Title..." onChange={(event) => { setNewTitle(event.target.value) }} />
            <input type='hidden'
                name='body'
                onChange={
                    (event) => {
                        var content = document.querySelector('#editor')
                        
                        return true
                    }
                }
            />
            <button onClick={createPost}>Submit</button>
        </div>
    )
}