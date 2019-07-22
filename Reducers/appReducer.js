import * as types from '../actions/types'

const initialState = {
    data: [],
    loading:false
   

}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_MOVIE_CLICKED:
            return { ...state, loading: true }
        case types.FETCH_MOVIE_SUCCESS:
            return { ...state, loading: false, data:action.data }
        case types.FETCH_MOVIE_FAILED:
            return { ...state, loading: false,  }


        // case types.LOGOUT:
        //     return { initialState }
    }
    return state
}

