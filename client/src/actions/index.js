import {GET_DATA} from '../constants';



export const getData = (response) => {
    return {
        type: GET_DATA,
        horses: response
    }
}