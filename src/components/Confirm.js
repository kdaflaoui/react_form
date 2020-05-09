import React, { Component, Fragment } from 'react' 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

class Confirm extends Component {
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const {values, handleChange} = this.props;
        const  {firstName, lastName, email, occupation, city, bio} = values;
        return (
            <MuiThemeProvider>
                <Fragment>
                    <AppBar title="Enter User Details "/>
                    <List>
                        <ListItem primaryText="First Name" secondaryText={firstName} />
                        <ListItem primaryText="Last Name" secondaryText={lastName} />
                        <ListItem primaryText="Email" secondaryText={email} />
                        <ListItem primaryText="Occupation" secondaryText={occupation} />
                        <ListItem primaryText="City" secondaryText={city} />
                        <ListItem primaryText="Bio" secondaryText={bio} />
                    </List>
                    <br />
                    <RaisedButton 
                        label='Go Back'
                        primary={false}
                        onClick={this.back}
                        style={style.buttom}
                    />
                    <RaisedButton 
                        label='Confirm & Continue'
                        primary={true}
                        onClick={this.continue}
                        style={style.buttom}
                    />
                </Fragment>
            </MuiThemeProvider>
        )
    }
}

export default Confirm;

const style = {
    buttom : {
        margin : 15
    }
}