import React from 'react';
import MessageList from './MessageList.jsx';
import ChannelList from './ChannelList.jsx';
import MessageBox from './MessageBox.jsx';

import AppBar from 'material-ui/lib/app-bar';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import MyRawTheme from '../themes/basic.js';

class App extends React.Component {
    constructor(){
        super();
        
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
        return (
            <div>
                <AppBar title="Awesome Chat App" />
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
        )
    }    
}

export default App;