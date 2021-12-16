import { useState } from "react";
import "./index"; // instead of styles.css

// Definition of App
export default function App() {
  const [movieList, setMovieList] = useState([
    {
      name: "SpiderMan: No Way Home",
      poster:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/spider-mannowayhome_lob_crd_03.jpg",
      rating: 8.6
    },
    {
      name: "Eternals",
      poster:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/eternals_lob_crd_03_0.jpg",
      rating: 8.6
    },
    {
      name: "Black Widow",
      poster:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/blackwidow_lob_crd_06.jpg",
      rating: 8.6
    },
    {
      name: "Avengers: Endgame",
      poster:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05_2.jpg",
      rating: 8.6
    },
    {
      name: "Shang-Chi and The Legend of the Ten Rings",
      poster:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/shangchi_lob_crd_07.jpg",
      rating: 8.6
    },
    {
      name: "Captain Marvel",
      poster:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/captainmarvel_lob_crd_06.jpg",
      rating: 9.5
    }
  ]);

  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");

  return (
    <div className="App">
      <Navbar />
      <div className="add-movie">
        <input
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter Movie Name"
        />
        <input
          onChange={(event) => setPoster(event.target.value)}
          placeholder="Enter Img Url"
        />
        <input
          onChange={(event) => setRating(event.target.value)}
          placeholder="Enter Movie Ratings"
        />
        <br />
        <button
          className="add-btn"
          onClick={() => {
            const newMovie = {
              name: name,
              poster: poster,
              rating: rating
            };
            console.log(newMovie);
            setMovieList([...movieList, newMovie]);
          }}
        >
          Add-Movie
        </button>
      </div>
      <div className="movie-list">
        {movieList.map(({ name, poster, rating },index) => (
          <Movie 
          deletButton={<button onClick={()=>{
            const deleteIndex=index;
            const remainingMovies=movieList.filter((mv,idx)=>deleteIndex!== idx);
            setMovieList(remainingMovies);
          }} className="dlt-btn">Delete</button>}
          name={name} poster={poster} rating={rating} />
        ))}
        {/* {for (movie in movies){
           <Movie name={movie.name} poster={movie.poster} rating={movie.rating} />
        }} */}
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <div className="navbar">
      <img
        className="logo"
        src="https://external-preview.redd.it/qzDjXXzximSncp408pCAh5naQJpumUPBqm-THT2kWrQ.png?width=640&crop=smart&auto=webp&s=5a50b6b61f88d5ede36c1e1541e6f19c9a4a4b7d"
        alt="marvel-studio-logo"
      />
    </div>
  );
}
function Movie({ deletButton,name, poster, rating, summary }) {
  const styles = { color: rating >= 8.5 ? "green" : "Red" };
  return (
    <div className="movie-container">
      <img src={poster} alt="RRR" className="movie-poster" />
      <h3 className="movie-name">{name}</h3>
      <div className="movie-specs">
        <p className="movie-rating" style={styles}>
          <span>⭐</span> {rating}
        </p>
        <Counter />
        {deletButton}
      </div>
      <p className="movie-summary">{summary}</p>
    </div>
  );
}
function Counter() {
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);
  return (
    <div>
      <button className="like" onClick={() => setLike(like + 1)}>
        <span>👍</span>
        {like}
      </button>
      <button className="dislike" onClick={() => setDisLike(disLike + 1)}>
        <span>👎</span>
        {disLike}
      </button>
    </div>
  );
}
