import React, { Component } from 'react'
import { Switch, FormGroup, FormControlLabel } from '@material-ui/core';

class NewSwitch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notifications: false,
        }
    }

    toggleChecked = (e) => {
        this.setState({
            notifications: !this.state.checked,
        })
        alert("Your application is offline. You won't be able to share or stream music to other devices.")
    }

    render() {
        return <FormGroup>
            <FormControlLabel 
            control={<Switch checked={this.state.notifications} onChange={this.toggleChecked} />}
            label="Online Control" />
        </FormGroup>;
    }
}

export default NewSwitch;