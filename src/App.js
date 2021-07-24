import React from "react";

function Movie({fav}) {
  return <h2>I like {fav}</h2>;
}

// function Movie_Name({ fav }) {
//   return <h2>I like {fav}</h2>;
// }

const movieILike = [
  {
    fav: "액션"
  },
  {
    fav: "드라마"
  },
  {
    fav: "호러"
  }
];

function App() {
  return (
    <div>
      {movieILike.map(item => (
        <Movie fav={item.fav} />
      ))}
    </div>
  );
}

export default App;
