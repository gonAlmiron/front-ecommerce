import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Home from './components/Home'
import SignUp from './components/SignUp';
import NuevoProducto from './components/NuevoProducto';
import Productos from './components/Productos';
import ChatDos from './components/chatDos/ChatDos';
import socketIO from 'socket.io-client';
import IngresoListContainer from './components/ingresos/IngresoListContainer'
import IngresoDetailContainer from './components/ingresos/IngresoDetailContainer';

const socket = socketIO.connect('http://localhost:3002', {transports: ['websocket']});


const App = () => {

    return (
      <BrowserRouter>

        <NavBar/>
        <Routes>
          <Route path='/' element={ <Home/>} />
          <Route path='/login' element={ <Login/>} />
          <Route path='/signup' element={ <SignUp/>} />
          <Route path='/newproduct' element={ <NuevoProducto/>} />
          <Route path='/products' element={ <Productos/>} />
          <Route path='/chat' element={ <ChatDos socket={socket}/>} />
          <Route path='/ingresos' element={ <IngresoListContainer/>} />
          <Route path='/ingresodetail/:id' element={ <IngresoDetailContainer/>} />
        </Routes>


      </BrowserRouter>
    );
  }
  
export default App;
