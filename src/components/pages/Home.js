import React, { useEffect, useState } from 'react'
import {collection, getDocs} from 'firebase/firestore'
import { db } from '../../firebase-config';


function Home() {
  const [postList, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, [deletePost]);
  return (
    <div>
        <h1>Home</h1>
    </div>
  )
}

export default Home