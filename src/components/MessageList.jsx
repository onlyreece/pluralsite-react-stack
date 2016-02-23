import React from 'react';
import Message from './Message.jsx';
import mui from 'material-ui';
import Firebase from 'firebase';
import _ from 'lodash'; 
import settings from '../config/secure.config.js'; 

var {Card, List} = mui;

class MessageList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            messages: []
        };
        
        this.firebaseRef = new Firebase(settings.firebaseUrl);
        this.firebaseRef.on("value", (dataSnapshot)=>{
            var messagesVal = dataSnapshot.val();
            var messages = _(messagesVal)
                .keys()
                .map((messageKey)=>{
                    var cloned = _.clone(messagesVal[messageKey]);
                    cloned.key = messageKey;
                    return cloned;
                })
                .value();
            this.setState({
                messages: messages 
            });
        });
    }
    
    render(){
        var messageNodes = this.state.messages.map((message)=>{
            return (
                <Message message={message.message} />
            );
        });
        
        return (
            <Card style={{
                flexGrow: 2,
                marginLeft: 30
            }}>
                <List>
                    {messageNodes}
                </List>
            </Card>  
        );
    }
}

export default MessageList;