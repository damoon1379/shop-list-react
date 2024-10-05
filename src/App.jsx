import { useState } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { ShopContextProvider } from './shopContext'
import {Main} from './mainPage'
import {Cart} from './Cart'
import './App.css'

function App() {

  return (
    <div className='App'>
    <ShopContextProvider>
      <div className='main'><Main/></div>
      <div className='cart'><Cart/></div>
    </ShopContextProvider>
    </div>
  )
}

export default App
