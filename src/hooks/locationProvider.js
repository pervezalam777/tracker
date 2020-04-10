import contextBuilder from './contextBuilder';
import tracker from '../api/tracker'

const ADD_LOCATION = "add_location";
const ADD_CURRENT_LOCATION = "add_current_location";
const START_RECORDING = "start_recording";
const STOP_RECORDING = "stop_recording";
const CHANGE_NAME = "change_name";

const reducer = (state, {type, payload}) => {
    switch(type){
        case ADD_LOCATION:
            return {...state, locations:[...state.locations, payload]}
        case ADD_CURRENT_LOCATION:
            return {...state, currentLocation:payload}
        case START_RECORDING: 
            return {...state, recording:true}
        case STOP_RECORDING:
            return {...state, recording:false}
        case CHANGE_NAME:
            return {...state, name:payload}
        default:
            return state
    }
}

const changeName = dispatch => (name) => {
    dispatch({type:CHANGE_NAME, payload:name})
}

const startRecording = dispatch => () => {
    dispatch({type:START_RECORDING})
}

const stopRecording = dispatch => () => {
    dispatch({type:STOP_RECORDING})
}

const addLocation = dispatch => (location, recording) => {
    dispatch({type:ADD_CURRENT_LOCATION, payload:location});
    if(recording){
        dispatch({type:ADD_LOCATION, payload:location})
    }
}

export const { 
    withContext:withLocationContext, 
    Provider:LocationProvider
} = contextBuilder(
    reducer, 
    {
       recording:false,
       locations:[],
       currentLocation:null,
       name:''
    }, 
    {
        startRecording,
        stopRecording,
        addLocation,
        changeName
    }, 
    'locationState'
);