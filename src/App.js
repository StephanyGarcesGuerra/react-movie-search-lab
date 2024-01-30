import {useState, useEffect} from "react";
import './App.css';
import Form from './components/Form';
import MoviesDisplay from './components/MovieDisplay';



function App() {
  const apiKey = "f7c7032f";

const [movie, setMovie] = useState(null);
const getMovie = async(searchTerm) =>{
  try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      );
      const data = await response.json();
      setMovie(data);
  } catch (error){
    console.error(error);
  }
};

  useEffect(() => {
    getMovie ("Clueless");
    }, []
  );

  return (
    <div className="App">
      <h1> Movie Search App </h1>
      <Form moviesearch={getMovie} />
      <MoviesDisplay movie ={movie} />
    </div>
  );
}

export default App;
