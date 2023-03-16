import React from 'react';

function Home() {
 

    // const Home = ({ socket }) => {
    //   const navigate = useNavigate();
    //   const [username, setUsername] = useState('');
    
    //   const handleSubmit = (e) => {
    //     e.preventDefault();
    //     localStorage.setItem('username', username);

    //     socket.emit('newUser', { username, socketID: socket.id });
    //     navigate('/chat');
    //   };

  return (
    <div className='home'>

        <img src="https://files.fm/u/nx7cfzm4h" alt="imagen fondo" />
        
    </div>
  );
}


export default Home