import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import './App.css';
import Login from './components/Login';
import Home from './components/Home'
import SignUp from './components/SignUp';
import NuevoProducto from './components/NuevoProducto';
import Productos from './components/Productos';
import Chat from './components/chat/ChatPage';
import socketIO from 'socket.io-client';

const socket = socketIO.connect('http://localhost:3002/api', {transports: ['websocket']});


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
          <Route path='/chat' element={ <Chat socket={socket}/>} />
        </Routes>


      </BrowserRouter>
    );
  }
  
export default App;
