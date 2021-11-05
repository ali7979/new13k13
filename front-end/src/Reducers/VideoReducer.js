import {
    CANCEL_LIKE_FAIL,
    CANCEL_LIKE_REQUEST,
    CANCEL_LIKE_SUCCESS,
    COMMENT_VIDEO_FAIL,
    COMMENT_VIDEO_REQUEST,
    COMMENT_VIDEO_SUCCESS,
    GET_VIDEOS_FAIL,
    GET_VIDEOS_REQUEST,
    GET_VIDEOS_SUCCESS,
    LIKE_VIDEO_FAIL,
    LIKE_VIDEO_REQUEST,
    LIKE_VIDEO_SUCCESS,
    SHARE_VIDEO_FAIL,
    SHARE_VIDEO_REQUEST,
    SHARE_VIDEO_SUCCESS,
    UPLOAD_VIDEO_REQUEST,
    VIDEO_UPLOAD_FAIL,
    VIDEO_UPLOAD_REQUEST,
    VIDEO_UPLOAD_SUCCESS,
    VIEW_VIDEO_FAIL,
    VIEW_VIDEO_REQUEST,
    VIEW_VIDEO_SUCCESS,
    UPLOAD_VIDEO_SUCCESS,
    UPLOAD_VIDEO_FAIL
} from '../Constants/VideoConstants';

export const VideoReducer = (state={loading:false,uploaded:false,error:false},action)=>{
    switch(action.type){
        case VIDEO_UPLOAD_REQUEST:
            return {loading:true}
        case VIDEO_UPLOAD_SUCCESS:
            return {loading:false,uploaded:action.payload}
        case VIDEO_UPLOAD_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state;
    }
}

export const GetVideoReducer = (state={},action)=>{
    switch(action.type){
        case GET_VIDEOS_REQUEST:
            return {loading:true};
        case GET_VIDEOS_SUCCESS:
            return {loading:false,payload:action.payload}
        case GET_VIDEOS_FAIL:
            return {loading:false,error:action.payload}

        case LIKE_VIDEO_REQUEST:
        case CANCEL_LIKE_REQUEST:
        case COMMENT_VIDEO_REQUEST:
        case SHARE_VIDEO_REQUEST:
            return {payload:state.payload};
        case LIKE_VIDEO_SUCCESS:
        case CANCEL_LIKE_SUCCESS:
        case COMMENT_VIDEO_SUCCESS:
        case SHARE_VIDEO_SUCCESS:            
            return {payload:state.payload};
        case LIKE_VIDEO_FAIL:
        case CANCEL_LIKE_FAIL:
        case COMMENT_VIDEO_FAIL:
        case SHARE_VIDEO_FAIL:            
            return {payload:state.payload,error:action.error}
        case VIEW_VIDEO_REQUEST:
            return {payload:state.payload};
        case VIEW_VIDEO_SUCCESS:            
            if(action.payload.viewed){
                state.payload.map(item=>{
                    if(item.id === action.payload.video_id){
                        item.views++;
                    }
                    return item
                })
            }
            return {payload:state.payload};
        case VIEW_VIDEO_FAIL:            
            return {payload:state.payload,error:action.error}
        default:
            return state;
    }
}
export const uploadVideoReducer = (state = {},action)=>{
    switch(action.type){
        case UPLOAD_VIDEO_REQUEST:
            return {loading:true}
        case UPLOAD_VIDEO_SUCCESS:
            return {loading:true,payload:action.payload};
        case UPLOAD_VIDEO_FAIL: 
            return {loading:false,error:action.payload}
        default:
            return state;
    }
}