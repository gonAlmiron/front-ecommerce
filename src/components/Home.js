import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Home() {
 

    const Home = ({ socket }) => {
      const navigate = useNavigate();
      const [username, setUsername] = useState('');
    
      const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('username', username);
        //sends the username and socket ID to the Node.js server
        socket.emit('newUser', { username, socketID: socket.id });
        navigate('/chat');
      };

  return (
    <div className='home'>
      <h1>Home</h1>
    </div>
  );
}
}

export default Home