import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import 'flowbite/dist/flowbite.css';


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />;
        <Route path='/sign-in' element={<SignIn />} />;
        <Route path='/sign-up' element={<SignUp />} />;
        <Route path='/dashboard' element={<Dashboard />} />;
      </Routes>
    </BrowserRouter>
  )
}

export default App
