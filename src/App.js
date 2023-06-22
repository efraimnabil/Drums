import './App.css';
import drum from './images/drum.png';
import sound1 from './sounds/sound1.mp3';
import sound2 from './sounds/sound2.mp3';
function App() {

  const play = (num) => {
    let audio = new Audio();
    if(num === 1){
      audio.src = sound1;
    }
    else if(num === 2){
      audio.src = sound2;
    }
    audio.play();
  }
  return (
    <div className="App">
      <img src = {drum} alt = "drum" className='drum' onClick={() => play(2)} draggable="false"/>
      <img src = {drum} alt = "drum" className='drum' onClick={() => play(1)} draggable="false"/>
    </div>
  );
}

export default App;
