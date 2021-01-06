import React from 'react';
import './App.css';
import Teacher from './pages/Teacher/Teacher';
import Booking from './pages/Booking/Booking';
import Tasks from './pages/Tasks/Tasks';
import ToolbarComponent from './components/header/Header';
import LeftBar from './components/leftBar/LeftBar';
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import QRCode from './pages/QR-Code/QRCode'
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
