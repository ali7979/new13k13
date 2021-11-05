import {applyMiddleware,combineReducers,compose,createStore} from 'redux'
import thunk from 'redux-thunk'
import { loginReducer, followReducer, userProfileReducer } from './Reducers/UserReducer';
import { GetVideoReducer, VideoReducer, uploadVideoReducer } from './Reducers/VideoReducer';

const initialState = {
    userLogin:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):{},
}


const reducer = combineReducers({
    userLogin:loginReducer,
    videoUploaded:VideoReducer,
    videos:GetVideoReducer,
    userFollowing:followReducer,
    userProfile:userProfileReducer,
    uploadVideo:uploadVideoReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer,initialState,composeEnhancer(applyMiddleware(thunk)))

export default store;