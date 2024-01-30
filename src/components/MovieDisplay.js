
function MoviesDisplay({movie}) {
  const loaded =() =>{
    return (
        <div>
            <h2> Movies Display </h2>
            <h3> {movie.Title}</h3>
            <h4> {movie.Genre}</h4>
            <img src ={movie.Poster} alt ={movie.Title} />
            <h4> {movie.Year}</h4>
        </div>
    );
};

const loading =() => {
    return <h1> No movie to display </h1>;
};

return movie ? loaded() : loading();

}

export default MoviesDisplay;