import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL } from './../actions';

export const initialState = {
    smurfs: [],
    isLoading: false,
    errorMessage: "",
}

const reducer = (state=initialState, action)=>{
    case FETCH_START:
        return({
            ...state,
            isLoading: true
        })
    case FETCH_SUCCESS:
        let newSmurf = {
            id: action.payload.id,
            name: action.payload.name,
            position: action.payload.position,
            nickname: action.payload.nickname,
            description: action.payload.description
        }
        return({
            ...state,
            isLoading: false,
            smurfs: [...state.smurfs, newSmurf]
        })
    case FETCH_FAIL:
        return({
            ...state,
            isLoading: false,
            errorMessage: action.payload
        })
    default:
        return state;
}

export default reducer;

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accomidate the start of a smurf fetch.
//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.