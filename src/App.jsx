import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import LoginSingup from './Components/LoginSinup/LoginSinup'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/Home/HomePage ';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
    <Router>
      <Routes>
        <Route path='/' element = {<LoginSingup/>}/>
        <Route path='/home' element = {< HomePage />}/>
      </Routes>
    </Router>
   
    </>
  )
}

export default App;
