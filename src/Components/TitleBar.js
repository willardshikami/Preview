import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styles = {
    titlebar:{
        color: '#111517',
        background: '#FFFFFF',
    },
    textColor:{
    color: '#111517',
  },
}


class TitleBar extends Component {
  render() {
    return (
      <div className="TitleBar">
         <MuiThemeProvider>

            <AppBar title="Preview"
                    titleStyle={styles.textColor}
                    zDepth={0}
                    showMenuIconButton={false}
                    style={styles.titlebar}/>

         </MuiThemeProvider>
      </div>
    );
  }
}

export default TitleBar;
