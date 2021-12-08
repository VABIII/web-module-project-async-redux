import axios from "axios";

export const FETCH_START = "FETCH-START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";


export const fetchStart = () => {
    return({type: FETCH_START} )
};

export const fetchSuccess = chars => {
    return({type: FETCH_SUCCESS, payload: chars})
};

export const fetchFail = err => {
    return({type: FETCH_FAIL, payload: err})
};


export const getChars = () => (dispatch) =>{
    dispatch({type: fetchStart()})

    axios.get(` https://rickandmortyapi.com/api/character`)
        .then(res => {
            const chars = res.data.results
            dispatch(fetchSuccess(chars))
        })
        .catch(err => {
            dispatch(fetchFail(err))
        })
};











































