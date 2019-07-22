
import * as types from '../actions/types'
import { fetchMovieApi } from '../service/Api';


export const fetchMovieClicked = () => {

    return(dispatch) => {

    //    // email = email.toUpperCase().trim();
         console.log('inside action')
    
    //    // console.log(fromDate, toDate,module)
        dispatch({
            type: types.FETCH_MOVIE_CLICKED
        });


        fetchMovieApi()
            .then((resJson) => {
                //check if validation is false means(date changed)
                console.log("Model Data")
                var resultData=[];
                console.log(resJson)
                for(let i=0;i<10;i++)
                {
                    console.log('object data')
                    console.log(resJson.results[i])
                   resultData.push( resJson.results[i]) 
                }
                console.log('data test')
                console.log(resultData)
                  dispatch({
                type: types.FETCH_MOVIE_SUCCESS, data: resultData 
            });
            console.log(this.props)
            // dispatch(NavigationActions.navigate({ routeName: 'Drawer' }));
            // NavigationService.navigate('Drawer');
            console.log("calling after dispatch")
            })
            .catch((e) => {
                console.log("catching error")
                console.log(e)
                // Keyboard.dismiss();
                // loginUserFail(dispatch, e.message);
                dispatch({
                    type: types.FETCH_MOVIE_FAILED
                });

            });

    }
};

