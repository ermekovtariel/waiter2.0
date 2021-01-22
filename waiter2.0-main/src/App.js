import React from 'react';
import './App.scss';
import Teacher from './pages/Teacher/Teacher';
import Booking from './pages/Booking/Booking';
import Tasks from './pages/Tasks/Tasks';
import ToolbarComponent from './components/header/Header';
import LeftBar from './components/leftBar/LeftBar';
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import QRCode from './pages/QR-Code/QRCode'
import FinishPrice from './components/pageComponents/FinishPrice';




function App() {   
  return (
    <BrowserRouter>
      <div className="App">
        <div className='app-wrapper'>
          <ToolbarComponent />
          <FinishPrice />
          <LeftBar className='leftbar' />
          <div className='content'>
            <Route path="/Teacher" component={Teacher} />
            <Route path="/booking" component={Booking} />
            <Route path="/tasks" component={Tasks} />
            <Route path="/qr-code" component={QRCode} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App