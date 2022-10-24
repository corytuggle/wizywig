import React from 'react';

import Header from '../Header';
import AboutDrawer from '../AboutDrawer';
import CompDrawer from '../CompDrawer';
import TextEditor from '../TextEditor';

export default function Home() {
  return (
    <div id="page">
      <Header />
      <AboutDrawer />
      <CompDrawer />
      <TextEditor />
      {/* <Progress /> */}
    </div>
  )
}
