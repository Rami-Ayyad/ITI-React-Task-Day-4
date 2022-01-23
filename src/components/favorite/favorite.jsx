import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import './favorite.css';
import axiosInstance from '../axiosConfig/axiosConfig';
import { useDispatch } from "react-redux";
import { addMovirToFavorite, changeMovieCounter } from "../../store/action";
import reactRouterDom from "react-router-dom";

export default function Favorite(props) {

    const [myFav, setMyFav] = useState([])

    const dispatch = useDispatch()

    let favMovie = useSelector((state) => {
        return state.myFavArr
    })


    let wholeState = useSelector((state) => {
        return state
    })

    

    let removeFav = (favMov) => {

        let newfavMovie=favMovie.filter((ele)=>ele !== favMov)

        dispatch(addMovirToFavorite(wholeState.myFavArr=[...newfavMovie]))

    }






    return (
        <>
            <h1></h1>
            <div className="favBigContainer">
                { favMovie.map((favMov) => {
                    return (
                        <div className="favCard" key={favMov.id}>
                            <img src={`https://image.tmdb.org/t/p/w500/${favMov.poster_path}`} alt="movie poster" />
                            <div className="favContainer">
                                <h4><b>{favMov.title}</b></h4>
                                <p>Score : {favMov.vote_average}</p>
                                <i className="fa fa-trash fa-3x" onClick={(e)=>{removeFav(favMov)}}></i>
                            </div>
                        </div>
                    )
                    
                })}


            </div>
        </>
    )

}