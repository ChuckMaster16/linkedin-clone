import { storage, provider, auth } from "../firebase";
import {SET_USER} from '../actions/actionType'
import db from "../firebase";

export const setUser =(payload) => ({
    type: SET_USER, 
    user: payload,
});

export function signInAPI(){
    return (dispatch)=>{
         auth.signInWithPopup(provider).then((payload)=>{
            dispatch(setUser(payload.user));  
            console.log(payload.user)     //remove before deployment    
         }).catch((err)=>alert(err.message));
    };
}

export function getUserAuth(){
    return (dispatch) => {
    auth.onAuthStateChanged(async (user) => {
        if(user){
            dispatch(setUser(user));
        
        }
    }); 
  }
}

export function signOutAPI(){
    return (dispatch)=>{
        auth.signOut().then(()=>{
            dispatch(setUser(null));
        }).catch((err)=>alert(err.message));
    }
}

export function postArticlesAPI(payload){
    return (dispatch) =>{
        if (payload.image != ''){
            const upload = storage
            .ref('images/${payload.image.name}')
            .put(payload.image);
            upload.on(
                'state_changed', 
                (snapshot) => {
                const progress = 
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    
                    console.log(`progress: ${progress}%`);
                    if(snapshot.state === 'RUNNING'){
                        console.log(`Progress: ${progress}%`);
                    }
            }, 
            (error) => console.log(error.code),
            async () => {
                const downloadURL= await upload.snapshot.ref.getDownloadURL();
                db.collection('articles').add({
                    actor:{
                        description: payload.user.email,
                        title: payload.user.displayName,
                        date: payload.timestamp,
                        image: payload.image.photoURL,
                    },
                    video: payload.video,
                    sharedImg: downloadURL,
                    comments: 0,
                    description: payload.description,
                });
             }
            );        
        }else if(payload.video){
            db.collection('articles').add({
                actor:{
                    description: payload.user.email,
                    title: payload.user.displayName,
                    date: payload.timestamp,
                    image: payload.image.photoURL,
                }, 
                video: payload.video,
                    sharedImg: '',
                    comments: 0,
                    description: payload.description,
            });
        }
    };
}