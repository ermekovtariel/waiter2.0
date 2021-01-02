import React from 'react';
import './App.css';
import Teacher from './components/content/Teacher/Teacher';
import Booking from './components/content/Booking/Booking';
import Tasks from './components/content/Tasks/Tasks';
import ToolbarComponent from './components/header/Header';
import LeftBar from './components/leftBar/LeftBar';
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import QRCode from './components/content/QR-Code/QRCode'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className='app-wrapper'>
          <ToolbarComponent />
          <LeftBar className='leftbar' />
          <div className='content'>
            <Route path="/Teacher" render={() => <Teacher />} />{" "}
            <Route path="/booking" render={() => <Booking />} />{" "}
            <Route path="/tasks" render={() => <Tasks />} />{" "}
            <Route path="/qr-code" render={() => <QRCode />} />{" "}
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
