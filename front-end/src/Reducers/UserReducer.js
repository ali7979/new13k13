import {
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_FOLLOW_REQUEST,
    USER_FOLLOW_SUCCESS,
    USER_FOLLOW_FAIL,
    USER_PROFILE_REQUEST,
    USER_PROFILE_SUCCESS,
    USER_PROFILE_FAIL,
    USER_MODIFY_PROFILE_SUCCESS,
    USER_MODIFY_PROFILE_FAIL,
    USER_MODIFY_PROFILE_REQUEST
} from '../Constants/UserConstants';

export const loginReducer = (state={},action)=>{
    switch(action.type){
        case USER_LOGIN_REQUEST:
            return {loading:true};
        case USER_LOGIN_SUCCESS:
            return {loading:false,payload:action.payload}
        case USER_LOGIN_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state;
    }
}

export const followReducer = (state={payload:{}},action)=>{
    switch(action.type){
        case USER_FOLLOW_REQUEST:
            return {loading:true,payload:{following:false}};
        case USER_FOLLOW_SUCCESS:
            return {loading:false,payload:action.payload}
        case USER_FOLLOW_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state;
    }
}

export const userProfileReducer = (state = {payload:{userData:[],userVideos:[],userLikedVideos:[],followers:[],following:[],userLikes:[]}},action)=>{
    switch(action.type){
        case USER_PROFILE_REQUEST:
            return {loading:true};
        case USER_PROFILE_SUCCESS:
            return {loading:false,payload:action.payload}
        case USER_MODIFY_PROFILE_SUCCESS:
            if(state.payload.userData){
                state.payload.userData[0].picture=action.payload.picture;
                state.payload.userData[0].bio=action.payload.bio;
            }
            return {...state};
        case USER_PROFILE_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state;
    }
}