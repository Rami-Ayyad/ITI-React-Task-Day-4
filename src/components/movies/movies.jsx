import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import axiosInstance from '../axiosConfig/axiosConfig';
import MovieCard from "../movieCard/movieCard";
import "./movies.css";
import changeLanguage, { changeMovieCounter, setAllMovies } from '../../store/action'

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/popular?api_key=86cf11ae1697a60b3eb8324a7e295174", {
      })
      .then((res) => {
      
        return (setMovies(res.data.results))

      })
      .catch((err) => console.log(err));


      
  }, []);


  const lang = useSelector((state) => {
    return state.lang
  })

  const loader = useSelector((state) => {
    return state.loader
  })


  // const allMovies = useSelector((state) => {
  //   console.log(state.allMovies)
  //   return state.allMovies
  // })


  const favMovie = useSelector((state) => {
    return state.myFavArr
  })

  const dispatch = useDispatch()

  let toggleLanguage = () => {
    dispatch(changeLanguage(lang === "en" ? "ar" : "en"))
  }


  // dispatch(setAllMovies(movies))

  dispatch(changeMovieCounter(favMovie.length))


  return (
    <>

      {loader && (<div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>)}

      <div dir={lang === "en" ? "ltr" : "rtl"}>

        <button className="btn btn-success btn-sm p-2 m-5" onClick={() => { toggleLanguage() }}><h4>Language :{lang}</h4></button>
        <div className='allCardsContainer'>

          {movies.map((movie) => {
            return (

              <div key={movie.id}>
                <MovieCard imgPath={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  title={movie.title}
                  score={movie.vote_average}
                  movieEnstence={movie}

                />
              </div>

            );
          })}
        </div>

      </div>
    </>
  );
};

export default Movies;
