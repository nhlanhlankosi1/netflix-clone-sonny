import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "./axios";
import requests from "./Requests";

function Banner() {
  //A Hook to set the Banner Movie object to se the Banner movie image, name, etc
  const [movie, setMovie] = useState([]);

  //Fetch movie Info to show on the Banner. Algorithm goes like this: Fetch all Netflix Originals movies and from the array randomly choose one movie to be set as the banner
  useEffect(() => {
    async function fetchData() {
      //Fetch all Netflix originals movies
      const request = await axios.get(requests.fetchNetflixOriginals);
      //Set the hook movie variable by choosing a random movie from the array. The random number is generated from any number from 0 to request.data.results.length - 1
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );

      //Important: return the request to close the Promise chain
      return request;
    }

    fetchData();
  }, []);

  console.log(movie);

  //Create the function to truncate the movie description if its too long
  function truncate(string, numOfCharsBeforeCutting) {
    return string?.length > numOfCharsBeforeCutting
      ? string.substr(0, numOfCharsBeforeCutting - 1) + "..."
      : string;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie.title || movie.name || movie.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My list</button>
        </div>
        <h1 className="banner_description">{truncate(movie.overview, 150)}</h1>
      </div>

      {/* Div to add a nice fade effect at the bottom of the banner image*/}
      <div className="banner_fade_button" />
    </header>
  );
}

export default Banner;
