import React from 'react';
import { Navbar, Header, Tothetop, Chatbot } from './components';
import {Teaminfo, Rmitbuildings, Display, Gameintro, Gamestory, Footer, Display2, Gameguide, Event} from './container'

import './App.css';
// 

const App = () => {
  return (
    <div className='App'>
      <div className='chatbotsection'>
        <Chatbot/>
      </div>
      <div className='totopbtn'>
        <Tothetop/>
      </div>      
      <div className='blue__bg'>
        <Navbar/>
        <Header/>
      </div>
      
      <div className='teaminfo'>
        <Teaminfo/>
      </div>
      
      <div className='buildings'>
        <Rmitbuildings/>
      </div>
      
      <div className='display'>
        <Display/>
        <Display2/>
      </div>
      <div>
        <Event/>
      </div>
      <div className='gameinfo'>
        <Gameintro/>
        <Gamestory/>
        <Gameguide/>
        <div className='footer'>
          <Footer/>
        </div>
      </div>
    </div>
  )
}

export default App
