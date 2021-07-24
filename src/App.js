import React from "react";
import PropTypes from "prop-types";

const movieILike = [
  {
    id: 1,
    fav: "액션",
    rating: 4.5,
  },
  {
    id: 2,
    fav: "드라마",
    rating: 4.2,
  },
  {
    id: 3,
    fav: "호러",
    rating: 4.3,
  },
];

function Movie({ fav, rating }) {
  return (
    <div>
      <h2>I like {fav}</h2>
      <h4>{rating} / 5.0</h4>
    </div>
  );
}

Movie.propTypes = {
  fav: PropTypes.string.isRequired,
  rating: PropTypes.number
}

// function Movie_Name({ fav }) {
//   return <h2>I like {fav}</h2>;
// }

function App() {
  return (
    <div>
      {movieILike.map((item) => (
        <Movie key={item.id} fav={item.fav} rating={item.rating} />
      ))}
    </div>
  );
}

export default App;
