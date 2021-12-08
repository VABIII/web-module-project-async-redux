import { FETCH_SUCCESS,FETCH_START, FETCH_FAIL } from "../actions";


const initialState = {
    characters: [],
    isFetching: false,
    error: ""
}


const reducer = (state=initialState, action) => {
    switch (action.type){
        case(FETCH_START):
            return ({
                characters: [],
                isFetching: true,
                error: ""
            })
        case(FETCH_SUCCESS):
            return({
                characters: action.payload,
                isFetching: false,
                error: ""
            })
        case(FETCH_FAIL):
            return ({
                characters: [],
                isFetching: false,
                error: action.payload
            })

        default:
            return state
    }
}


export default reducer;











































