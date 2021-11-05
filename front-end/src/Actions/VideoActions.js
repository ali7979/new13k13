import axios from 'axios'
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
    UPLOAD_VIDEO_FAIL,
    VIDEO_UPLOAD_FAIL,
    VIDEO_UPLOAD_REQUEST,
    VIDEO_UPLOAD_SUCCESS,
    VIEW_VIDEO_FAIL,
    VIEW_VIDEO_REQUEST,
    VIEW_VIDEO_SUCCESS,
    UPLOAD_VIDEO_REQUEST,
    UPLOAD_VIDEO_SUCCESS
} from '../Constants/VideoConstants';
//Post the video to 13k13
export const upVideo = (video)=>async dispatch=>{
    dispatch({type:VIDEO_UPLOAD_REQUEST})
    try {
        const {data} = await axios.post('/api/video/uploadVideo',video);
        dispatch({type:VIDEO_UPLOAD_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:VIDEO_UPLOAD_FAIL,payload:error})
    }
}
export const videoUpload = (video)=>async dispatch=>{
    dispatch({type:UPLOAD_VIDEO_REQUEST})
    try {
            const options = {
                onUploadProgress:(ProgressEvent)=>{
                    const {loaded,total} = ProgressEvent;
                    let percent = Math.floor((loaded*100)/total)
                    dispatch({type:UPLOAD_VIDEO_SUCCESS,payload:{loaded,total,percent}})
                }
            }
            axios.post('/api/video/placeVideo',video,options).then(res=>{
               dispatch({type:UPLOAD_VIDEO_SUCCESS,payload:res.data})
            })

    } catch (error) {
        dispatch({type:UPLOAD_VIDEO_FAIL,payload:error})
    }
}
export const getVideos = (id)=>async dispatch=>{
    dispatch({type:GET_VIDEOS_REQUEST})
    try {
        const {data} = await axios.post("/api/video/seed",{id});
        dispatch({type:GET_VIDEOS_SUCCESS,payload:data})
        dispatch({type:UPLOAD_VIDEO_SUCCESS,payload:{videpPath:undefined}})
    } catch (error) {
        dispatch({type:GET_VIDEOS_FAIL,payload:error})
    }
}

export const likeVideo = (id,video_id)=> async dispatch=>{
    dispatch({type:LIKE_VIDEO_REQUEST});
    try {
        const {data} = await axios.post("/api/video/like",{id,video_id})
        dispatch({type:LIKE_VIDEO_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:LIKE_VIDEO_FAIL,error})
    }
}

export const cancelLike = (video_id) => async dispatch=>{
    dispatch({type:CANCEL_LIKE_REQUEST})
    try {
        const {data} = await axios.post("/api/video/cancel-like",{video_id})
        dispatch({type:CANCEL_LIKE_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:CANCEL_LIKE_FAIL,error})
    }
}

export const commentVideo = (user_id,video_id,text)=>async dispatch=>{
    dispatch({type:COMMENT_VIDEO_REQUEST})
    try {
        const {data} = await axios.post("/api/video/comment",{user_id,video_id,text})
        dispatch({type:COMMENT_VIDEO_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:COMMENT_VIDEO_FAIL,error:error})
    }
}

export const sharevideo = (user_id,video_id)=>async dispatch=>{
    dispatch({type:SHARE_VIDEO_REQUEST})
    try {
        const {data} = await axios.post("/api/video/share",{user_id,video_id})
        dispatch({type:SHARE_VIDEO_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:SHARE_VIDEO_FAIL,error})

}
}
export const viewVideo = (user_id,video_id)=>async dispatch=>{
    dispatch({type:VIEW_VIDEO_REQUEST})
    try {
        const {data} = await axios.post("/api/video/view",{user_id,video_id});
        dispatch({type:VIEW_VIDEO_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:VIEW_VIDEO_FAIL,error})
    }
}