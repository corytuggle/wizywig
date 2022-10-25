import { Routes, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import Dashboard from './components/pages/Dashboard';
// import ProgressBar from './components/ProgressBar';
import LogIn from './components/pages/LogIn';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        {/* <Route path='/progressbar' element={<ProgressBar />} /> */}
        <Route path='/login' element={<LogIn />} />
      </Routes>
      
    </div>
  )
}

export default App;
