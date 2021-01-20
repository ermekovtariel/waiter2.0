import React from 'react';
import './App.scss';
import axios from 'axios'
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
  const [menu, setMenu] = React.useState([])
  
  React.useEffect(()=>{
    axios.get('http://localhost:3001/db.json')
    .then(({data})=>{
      setMenu(data.pizzas);
    });
  },[])

  return (
    <BrowserRouter>
      <div className="App">
        <div className='app-wrapper'>
          <ToolbarComponent />
          <FinishPrice />
          <LeftBar className='leftbar' />
          <div className='content'>
            <Route path="/Teacher" render={() => <Teacher />} />{" "}
            <Route path="/booking" render={() => <Booking />} />{" "}
            <Route path="/tasks" render={() => <Tasks items={menu} />} />{" "}
            <Route path="/qr-code" render={() => <QRCode />} />{" "}
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
