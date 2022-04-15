import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Details from './components/Details'
import ResponsiveGrid from './components/grid'
import './App.css'
import Navbar from './appbar'
import Cart from './components/cart'


const App = () => {

  return (
    <div className='App'>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<ResponsiveGrid/>}/>
        <Route path='/details/:id' element={<Details/>}/>
        <Route path="/cart" element={<Cart/>}/>
        {/* <Route path="/cart/:count" element={<Cart/>}/> */}
      </Routes>
      
      
    </div>
  )
}

export default App
