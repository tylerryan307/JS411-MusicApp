import React, { Component } from 'react'
import { Select, InputLabel, MenuItem, FormControl } from '@material-ui/core';

class NewSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notifications: false,
        }
    }

    toggleChecked = (e) => {
        this.setState({
            notifications: !this.state.notifications,
        })
        alert('Music quality is degraded. Increase quality if your connection allows it.')
    }


    render() {
        return (
            <div>
                <Select className="SelectStyle">
                    <MenuItem notifications={this.state.notifications} onClick={this.toggleChecked} value={1}>Low</MenuItem>
                    <MenuItem value={2}>Normal</MenuItem>
                    <MenuItem value={3}>High</MenuItem>
                </Select> 
            </div>    
        )
    }

}

export default NewSelect;