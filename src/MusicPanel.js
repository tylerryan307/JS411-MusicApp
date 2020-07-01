import React, { Component } from 'react'
import NewSwitch from './NewSwitch.js'
import NewSlider from './NewSlider.js'
import NewAppBar from './NewAppBar.js'
import NewSelect from './NewSelect.js'
import './App.css';


class MusicPanel extends Component {
    constructor(props) {
      super(props);
      this.state = {
        textValue: '',
      };
    }

    render() {
        return(
            
          <div className="MusicPanel">
             <NewAppBar />
             <div className="MusicBody">
                <div className="MusicTitle">
                    <h1>Welcome User!</h1>
                </div>
                <div className="CompBody">
                    <div className="SwitchBody">
                        <div className="CompHeight">
                            <h3>Online Mode</h3>
                            <p>Is this application connected to the internet?</p>
                            <NewSwitch />
                        </div>
                        <hr />
                    </div>
                    <div className="VolumeBody">
                        <div className="CompHeight">
                            <h3>Master Volume</h3>
                            <p>Overrides all other sound settings in this application</p>
                            <NewSlider />
                        </div>
                        <hr />
                    </div>
                    <div className="QualityBody">
                        <div className="CompHeight">
                            <h3>Sound Quality</h3>
                            <p>Manually control the music quality in event of poor connection</p>
                            <NewSelect />
                        </div>
                        <hr />
                    </div>
                </div>
             </div>
          </div>
        )
    }

}

export default MusicPanel;