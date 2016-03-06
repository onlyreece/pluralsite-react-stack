import React from 'react';
import MessageList from './MessageList.jsx';
import ChannelList from './ChannelList.jsx';
import MessageBox from './MessageBox.jsx';
import Login from './Login.jsx';

import AppBar from 'material-ui/lib/app-bar';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import MyRawTheme from '../themes/basic.js';
import connectToStores from 'alt-utils/lib/connectToStores';
import ChatStore from '../stores/ChatStore';

@connectToStores
class App extends React.Component {
    constructor(){
        super();
        
    }
    
    static getStores(){
        return [ChatStore];
    }
    
    static getPropsFromStores(){
        return ChatStore.getState();
    }
    
    static childContextTypes = {
        muiTheme: React.PropTypes.object
    }
    
    getChildContext(){
        return {
            muiTheme: ThemeManager.getMuiTheme(MyRawTheme)
        }
    }
    
    render(){
        var view = <Login />;

        if (this.props.user){
             view = (
                 <div>
                    <div style={{
                        display: 'flex',
                        flexFlow: 'row wrap',
                        maxWidth: 1200,
                        width: '100%',
                        margin: '30px auto 30px'
                    }}>
                        <ChannelList />
                        <MessageList />
                    </div>
                    <MessageBox />
                 </div>            
             );
        }
        
        return (
            <div>
                <AppBar title="Awesome Chat App" />
                {view}
            </div>
        )
    }    
}

export default App;