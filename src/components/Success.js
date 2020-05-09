import React, { Component, Fragment } from 'react' 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

class Success extends Component {

    render() {
        return (
            <MuiThemeProvider>
                <Fragment>
                    <AppBar title="Success"/>
                    <h1>Thank you for the registration</h1>
                    
                </Fragment>
            </MuiThemeProvider>
        )
    }
}

export default Success;