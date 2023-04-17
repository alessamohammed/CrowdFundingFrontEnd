import './App.css';
import Logo from '../logo.svg';
import AuthContent from './AuthContent';
import Header from './Header';
import { Routes, Route } from 'react-router-dom';
import Campaigns from './campaigns';
import Home from './Home';

function App() {
  return (
    <div >
      <Header />
     <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<AuthContent />} />
        <Route path='/campaigns' element={<Campaigns />} />
     </Routes>
    </div>
  )
}

export default App;