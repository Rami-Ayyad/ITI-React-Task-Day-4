import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { changeMovieCounter } from '../../store/action';



const Navbar = () => {


  useEffect(() => { dispatch(changeMovieCounter(counter)) })

  const counter = useSelector((state) => {
    return state.favCount
  })

  const dispatch = useDispatch();



  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand me-4 " to="/">Movies</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Home
                <span className="visually-hidden">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about"></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/favorite">Favorites ( {counter} )</Link>
            </li>

          </ul>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
