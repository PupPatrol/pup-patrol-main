import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './index.css'
import Navbar from './components/navbar'
import useMedia from 'use-media';
import NavBarDesktop from './components/navBarDesktop';


function App() {
let isMobile: Boolean = false;

if(useMedia({ minWidth: '768px' })){
isMobile = false;
}
else{
  isMobile = true;
}
  
  return (
  <div>
  {isMobile ? <Navbar /> : <NavBarDesktop />}
  <h1 className='text-3xl font-bold underline'>Wait... Im freaky!</h1>
  <h2>GYAAAAT!!!sadadsadas</h2>
  </div>
  )
}

export default App
