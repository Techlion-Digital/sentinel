import { useState } from 'react'
import './App.css'
import Header from './components/layout/header'
import Body from './components/layout/body'
import Footer from './components/layout/Footer'
import Sidebar from './components/layout/Sidebar'
function App() {

  return (
    <>
      <Header />
      <Sidebar />
      <Body />
      <Footer />
      
    </>
  )
}

export default App
