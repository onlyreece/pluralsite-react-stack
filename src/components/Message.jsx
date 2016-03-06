import React from 'react';
import mui from 'material-ui';

var {ListItem, Avatar} = mui;

class Message extends React.Component {
    constructor(props){
        super(props);
        
    }
    
    render(){
        return (
            //https://s.gravatar.com/avatar/8710a9154575c545bd2915653bc4f74e?s=80
            <ListItem leftAvatar={<Avatar src={this.props.message.profilePic} />}>
                {this.props.message.message}
            </ListItem>
        );
    }
}

export default Message;