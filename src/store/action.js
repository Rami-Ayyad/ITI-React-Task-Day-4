

export default function changeLanguage(data) {

    return {
        type: "SET_LANGUAGE",
        payload: data,
    };
}


export function changeLoader(data) {
    return {
        type: "SET_LOADER",
        payload: data,
    }
}


export function addStarToFavorite(data) {
    return {
        type: "SET_STARTOFAV",
        payload: data,
    }
}


export function addMovirToFavorite(data) {
    return {
        type: "SET_MOVIETOFAV",
        payload: data,
    }
}


export function changeMovieCounter(data) {
    return {
        type: "SET_MOVIECOUNT",
        payload: data,
    }
}


export function setAllMovies(data) {
    return {
        type: "SET_ALLMOVIES",
        payload: data,
    }
}




