import alt from '../alt';
import Firebase from 'firebase';
import settings from '../config/secure.config.js'; 

class Actions {
    constructor(){
        this.generateActions(
            'channelsReceived',
            'channelsFailed',
            'messagesReceived',
            'messagesFailed',
            'channelOpened',
            'messagesLoading',
            'sendMessage',
            'messageSendSuccess',
            'messageSendError',
            'messageReceived'
        );
    }
    
    login(args){
        return (dispatch) => {
            var firebasRef = new Firebase(settings.firebaseRootUrl);
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