
import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import BookingVehicle from './pages/BookingVehicle';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' exact Component={Home}></Route>
      <Route path='/login' exact Component={Login}></Route>
      <Route path='/register' exact Component={Register}></Route>
      <Route path='/bookingvehicle' exact Component={BookingVehicle}></Route>
      
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
