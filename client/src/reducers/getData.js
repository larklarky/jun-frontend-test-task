import { GET_DATA } from "../constants";

const COLORS = ['#ffcc40', '#179ABF', '#fe8f66', '#50dfb2', '#b9a1f8', '#ff92a4']

const addColor = (array) => {
    let newArray = array.map((horse, index) => {
        return array[index]= {name: horse.name,  distance: horse.distance, color: COLORS[index % COLORS.length]}
    })
    console.log('newArray', newArray)
    return newArray;
}

const initialState = {
    horses: [],

}

const horses = (state = initialState, action) => {
    switch(action.type) {
        case GET_DATA:
        return Object.assign({}, state, {
           horses: addColor(action.horses)
        })
        default:
            return state;
    }
}

export default horses;