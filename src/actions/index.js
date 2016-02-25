import alt from '../alt';
import Firebase from 'firebase';
import settings from '../config/secure.config.js'; 

class Actions {
    login(args){
        return (dispatch) => {
            var firebasRef = new Firebase(settings.firebaseUrl);
            firebasRef.authWithOAuthPopup("google", (error, user)=>{
                if(error){
                    return;
                }
                
                dispatch(user);
            })
        }
    }
}

export default alt.createActions(Actions);