
import imagen from './img/rick-morty.png';
import './App.css';
import {useState} from 'react';
import Characters from './components/Characters';

function App() {
const[characters, setCharacters] = useState(null);

  const reqApi = async () => {

    const api = await fetch('https://rickandmortyapi.com/api/character');
    const characterApi = await api.json();
setCharacters(characterApi.results);
    
  };
 

  return (
    <div className="App">
      <header className="App-header">

        <h1 className="title">API RICK AND MORTY</h1>
        {characters ? ( 
        <Characters characters={characters} setCharacters={setCharacters}/>

        ):(
          <>
          <img src={imagen} alt="rick & morty" className="img-home"></img>
          <button onClick={reqApi} className="btn-search">BUSCAR PERSONAJES</button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
