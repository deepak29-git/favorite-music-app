import { useState } from "react";
import "./styles.css";

var musicGenres = {
  Rock: [
    {
      name: "The Local Train",
      rating: "4/5"
    },
    {
      name: "Agnee",
      rating: "4.7/5"
    }
  ],
  Pop: [
    { name: "A Girl Like You", rating: "4.5/5" },
    { name: "Aaj Phir Jeene Ki", rating: "4.8/5" }
  ],
  Instrumental: [
    { name: "Tere Bina Zindagi Se", rating: "4/5" },
    { name: "Pal Pal Dil ke Pas", rating: "4.5/5" }
  ]
};
var musicList = Object.keys(musicGenres);

export default function App() {
  const [genre, setgenre] = useState("Instrumental");

  function clickGenre(list) {
    setgenre(list);
  }

  return (
    <div className="App">
      <h1>Good music</h1>
      <p>Check My Favorite Music</p>

      {musicList.map((list) => (
        <button key={list} onClick={() => clickGenre(list)}>
          {list}
        </button>
      ))}
      {musicGenres[genre].map((item) => {
        return (
          <>
            <h3 className="name">{item.name}</h3>
            <small className="rating">{item.rating}</small>
          </>
        );
      })}
    </div>
  );
}
