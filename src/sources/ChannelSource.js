import Actions from '../actions';
import Firebase from 'firebase';
import settings from '../config/secure.config.js'; 

let firebaseRef = new Firebase(settings.firebaseRootUrl + "channels");

let ChannelSource = {
    getChannels: {
        remote(state){
            return new Promise((resolve, reject) => {
               firebaseRef.once("value", (dataSnapshot) => {
                   var channels = dataSnapshot.val();
                   resolve(channels);
               }); 
            });
        },
        success: Actions.channelsReceived,
        error: Actions.channelsFailed
    }
}

export default ChannelSource;
