import logo from './logo.svg';
import './App.scss';
import Home from './Pages/Home/Home';
import { CategoriesProvider } from './Contexts/CategoryContext';
import Tags from './Components/Tags/Tags';
import { useState } from 'react';
import Player from './Components/Player/Player';

function App() {
  const [isShowPlayer, setIsShowPlayer] = useState(false);
  const [video, setVideo] = useState('');

  const showPlayer = () => {
      setIsShowPlayer(!isShowPlayer);
  }

  const playerTrigger = url =>{
    showPlayer();
    setVideo(url);
  }

  return (

          <CategoriesProvider>
          <div className="App container">
            <Home playerTrigger={playerTrigger}/>
               {isShowPlayer ? <Player className="test" video={video} onclose={showPlayer}/>: null}
          </div>
          
    </CategoriesProvider>



  );
}

export default App;
