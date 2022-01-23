import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import "./movieCard.css"
import { addMovirToFavorite, addStarToFavorite, setAllMovies, changeMovieCounter } from '../../store/action'



const MovieCard = (props) => {

    // const [myStar, setMyStar] = useState()

    // useEffect(() => {
    //     setMyStar(starredMov)
    // })

    const starredMov = useSelector((state) => {
        return state.starred
    })

    const favArr = useSelector((state) => {
        return state.myFavArr
    })

    // const allMovies = useSelector((state) => {
    //     return state.allMovies
    // })

    const dispatch = useDispatch()

    // dispatch(setAllMovies(props.movieEnstence))


    // console.log(allMovies)

    const addFav = (movie, tar) => {

        const isOnFav = favArr.includes(movie)

        // console.log(tar)
        // dispatch(addStarToFavorite(tar))
        if(!isOnFav) {
            dispatch(addMovirToFavorite(movie))
        }

        // dispatch(changeMovieCounter(favArr.length))
    
        


   
        if(tar.classList[3]== undefined){
            tar.classList.add("checked")
        }
        else{
            tar.classList.remove("checked")
        }
    }


    return (
        <>
            <div className="movieCard" name={props.key}>
                <img src={props.imgPath} alt="movie poster" />
                <div className="movieContainer">
                    <h4><b>{props.title}</b></h4>
                    <p>Score : {props.score}</p>
                    <i className={`fa fa-star fa-3x`} onClick={(e) => { addFav(props.movieEnstence, e.target); }}></i>
                </div>
            </div>
        </>
    );
}

export default MovieCard;