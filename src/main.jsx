import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Benefits from './components/Benefits.jsx'
import App from './App.jsx'

import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    
  <Header/>
  <App/>
 
  <Hero />
 
  <Benefits/>

  
  

  

  
  </BrowserRouter>
)
