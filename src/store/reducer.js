
let initial = {
    lang: "en",
    loader: true,
    starred: false,
    myFavArr: [],
    favCount: 0,
    allMovies: [],
};

export default function languageReducer(state = initial, action) {

    switch (action.type) {

        case "SET_LANGUAGE":
            return {
                ...state,
                lang: action.payload,
            };

        case "SET_LOADER":
            return {
                ...state,
                loader: action.payload,
            }

        case "SET_STARTOFAV":
            return {
                ...state,
                starred: action.payload,
            }

        case "SET_MOVIETOFAV":
            return {
                ...state,
                myFavArr: [...state.myFavArr, action.payload],
            }

        case "SET_MOVIECOUNT":
            return {
                ...state,
                favCount: action.payload,
            }

        case "SET_ALLMOVIES":
            return {
                ...state,
                allMovies: [...state.allMovies, action.payload],
            }



        default:
            return state;
    }
}


