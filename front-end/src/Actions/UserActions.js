import axios from 'axios';
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
    USER_MODIFY_PROFILE_REQUEST,
    USER_MODIFY_PROFILE_SUCCESS,
    USER_MODIFY_PROFILE_FAIL
} from '../Constants/UserConstants';

export const loginAction = (user)=> async dispatch=>{
    dispatch({type:USER_LOGIN_REQUEST});
    try{
        const {data} = await axios.post("/api/login/username",user)
        dispatch({type:USER_LOGIN_SUCCESS,payload:data});
    }catch(error){
        dispatch({type:USER_LOGIN_FAIL,payload:error});
    }
}
export const signupAction = (user)=> async dispatch=>{
    dispatch({type:USER_LOGIN_REQUEST});
    try{
        const {data} = await axios.post(`/api/Confirmation/${user.useremail}`,user)
        dispatch({type:USER_LOGIN_SUCCESS,payload:data});
    }catch(error){
        dispatch({type:USER_LOGIN_FAIL,payload:error});
    }}
export const userFollow = (user,follower)=>async dispatch=>{
    dispatch({type:USER_FOLLOW_REQUEST})
    try {
        const {data} = await axios.post("/api/follow",{user,follower});
        dispatch({type:USER_FOLLOW_SUCCESS,payload:{data,following:true}})
    } catch (error) {
        dispatch({type:USER_FOLLOW_FAIL,payload:{error,following:false}})
    }
}
export const userUnFollow = (user,follower)=>async dispatch=>{
    dispatch({type:USER_FOLLOW_REQUEST})
    try {
        const {data} = await axios.post("/api/unfollow",{user,follower});
        dispatch({type:USER_FOLLOW_SUCCESS,payload:{data,following:false}})
    } catch (error) {
        dispatch({type:USER_FOLLOW_FAIL,payload:{error,following:true}})
    }
}

export const userprofile = (user_id,my_id) =>async dispatch=>{
    dispatch({type:USER_PROFILE_REQUEST})
    try { 
        const {data} = await axios.post("/api/profile",{id:user_id,my_id});
        dispatch({type:USER_PROFILE_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:USER_PROFILE_FAIL,payload:error})
    }
}

export const updateProfile = (form)=>async dispatch=>{
    dispatch({type:USER_MODIFY_PROFILE_REQUEST});
    try {
        const {data} = await axios.post("/api/updateProfile",form,{
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        });
        dispatch({type:USER_MODIFY_PROFILE_SUCCESS,payload:data})
    } catch (error) {
        console.log(error);
        dispatch({type:USER_MODIFY_PROFILE_FAIL,payload:error})
    }
}

export const userDashboard = (user_id,my_id) =>async dispatch=>{
    dispatch({type:USER_PROFILE_REQUEST})
    try { 
        const {data} = await axios.post("/api/profile",{id:user_id,my_id});
        dispatch({type:USER_PROFILE_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:USER_PROFILE_FAIL,payload:error})
    }
}
