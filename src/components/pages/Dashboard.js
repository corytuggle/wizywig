import React from 'react'

import Header from '../Header';
import PostCRUD from '../PostCRUD';
import '../../css/dashboard.css';

export default function Dashboard() {
  return (
    <div>
        <Header />
        <PostCRUD />
    </div>
  )
}
