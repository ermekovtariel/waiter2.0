import React from 'react';
import Header from './Components/HeaderComponent/Header';
import Navbar from './Components/NavbarComponents/Navbar';
import Content from './Components/ContainerComponent/Content';
import './Zet.css';

function App() {
  return (
    <div className='p-4 kl col'>
      <Header/>
      <div className='app-wrapper'>
        <nav>
        <Navbar className='navbar' />

        </nav>
      <Content className='content' />
      
      </div>
    </div>
  );
}

export default App;
