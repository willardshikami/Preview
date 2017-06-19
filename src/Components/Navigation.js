import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './css/navigation.css';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  },
  thetabs: {
    background: '#FFF',
  },
  inkBarStyle: {
    background: '#111517',
  },
  textColor:{
    color: '#111517',
  }
};


class Navigation extends Component {
  constructor(props){
    super(props);
    this.state = {
      slideIndex: 0,
    };
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value
    });
  }

  render() {
    return (

    <div>
      <MuiThemeProvider>
      <Tabs inkBarStyle={styles.inkBarStyle}  
            tabItemContainerStyle={styles.thetabs} 
            onChange={this.handleChange}
            value = {this.state.slideIndex}>
            <Tab style={styles.textColor} 
                 label="Tab One" value={0}/>
            <Tab style={styles.textColor}
                 label="Tab Two" value={1}/>
            <Tab style={styles.textColor} 
                 label="Tab Three" value={2}/>
      </Tabs>
      </MuiThemeProvider>
      <SwipeableViews index={this.state.slideIndex}
                      onChangeIndex={this.handleChange}>

                      <div>
                        <h2 style={styles.headline}>Tabs with slide effect</h2>
                        This is slide one
                      </div>

                      <div style={styles.slide}>
                        This is slide two
                      </div>

                      <div style={styles.slide}>
                        This is slide three
                      </div>

      </SwipeableViews>
    </div>
    );
  }
}

export default Navigation;