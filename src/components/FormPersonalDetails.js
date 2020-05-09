import React, { Component, Fragment } from 'react' 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class FormPersonalDetails extends Component {
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
        console.log(values);
        return (
            
            <MuiThemeProvider>
                <Fragment>
                    <AppBar title="Enter Personal Details "/>
                    <TextField
                        hintText = "Enter your occupation"
                        floatingLabelText = "Occupation"
                        onChange = {handleChange('occupation')}
                        defaultValue = {values.occupation}

                    />
                    <br />
                    <TextField
                        hintText = "Enter your city"
                        floatingLabelText = "City"
                        onChange = {handleChange('city')}
                        defaultValue = {values.city}
                    />
                    <br />
                    <TextField
                        hintText = "Enter your bio"
                        floatingLabelText = "Bio"
                        onChange = {handleChange('bio')}
                        defaultValue = {values.bio}

                    />
                    <br />
                    <RaisedButton 
                        label='Go Back'
                        primary={false}
                        onClick={this.back}
                        style={style.buttom}
                    />
                    <RaisedButton 
                        label='Continue'
                        primary={true}
                        onClick={this.continue}
                        style={style.buttom}
                    />
    
                </Fragment>
            </MuiThemeProvider>
        )
    }
}

export default FormPersonalDetails;

const style = {
    buttom : {
        margin : 15
    }
}