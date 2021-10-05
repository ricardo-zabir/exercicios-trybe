import './App.css';
import data from './data';
import Pokemon from './Pokemon';
function App() {
  return (
    <div className="App">
      {
        data.map((pokemon, idx) => {
          return <Pokemon poke= {pokemon} key= {idx} />
        })
      }
    </div>
  );
}

export default App;
