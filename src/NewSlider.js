import React, { Component } from 'react'
// import { makeStyles } from '@material-ui/core/styles';
import { Slider } from '@material-ui/core';



class NewSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notifications: false,
            value: 80,
        }
    }

    toggleChecked = (e) => {
        this.setState({
            notifications: !this.state.notifications,
            value: 80,
        })
        alert('Listening to music at a high volume could cause long-term hearing loss.')
    }

    render() {
        return (
                
                <Slider
                    notifications={this.state.notifications}
                    onClick={this.toggleChecked}
                    aria-labelledby="descrete-slider"
                    valueLabelDisplay="auto"
                    defaultValue={50}
                    step={10}
                    min={0}
                    max={100}
                    marks
                />
        )    
    }

}

export default NewSlider;