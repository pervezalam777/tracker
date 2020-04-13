import contextBuilder from './contextBuilder'
import trackerApi from '../api/tracker'
import {navigate} from '../navigationRef'

const TRACKS_RECEIVED = "tracks_received"
const trackReducer = (state, {type, payload}) => {
    switch(type){
        case TRACKS_RECEIVED:
            return payload;
        case ADD_TRACK:
            return {tracks:[...state.tracks, payload]}
        default:
            return state;
    }
}

const fetchTracks = dispatch => async () => {
    try {
        const response = await trackerApi.get('/tracks')
        dispatch({type:TRACKS_RECEIVED, payload: response.data})
    } catch(err) {
        console.log('Fetch track error: ', err)
    }
};

const createTrack = dispatch => async (name, locations, callback) => {
    try {
        const response = await trackerApi.post('/tracks', {name, locations})
        if(callback){
            callback();
        }
        dispatch({type:ADD_TRACK, payload:response.data});
        navigate('TrackList');
    } catch (err) {
        console.log('createTrack error', err);
    }

};

export const {
    withContext:withTrackContext, 
    Provider:TrackProvider
} = contextBuilder(
    trackReducer, 
    {
        tracks:[]
    }, 
    {fetchTracks, createTrack}, 
    "trackState"
)