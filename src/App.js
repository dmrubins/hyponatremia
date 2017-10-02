import React, { Component } from 'react';
import * as Receptor from './components/Receptor';
import * as Organ from './components/Organ';
import * as Lab from './components/Lab';
import { TonicStates, AdhStates, VolumeStates } from './lib.js'
import { SerumOsmolality, EffectiveArterialVolume } from './components/PhysiologicState'
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.onSerumOsmsChange = this.onSerumOsmsChange.bind(this);
    this.onVolumeChange = this.onVolumeChange.bind(this);
    this.onAdhChange = this.onAdhChange.bind(this);
    this.state = {
      tonicStatus : TonicStates.eu,
      adhStatus: AdhStates.eu,
      volumeStatus: VolumeStates.eu
    }
  }

  onSerumOsmsChange(tonicStatus){
    this.setState({
      tonicStatus: tonicState
    })
  }

  onVolumeChange(volumeStatus){
    this.setState({
      volumeStatus: volumeStatus
    })
  }

  onAdhChange(adhStatus){
    this.setState({
      adhStatus: adhStatus
    })
  }

  render() {
    return (
      <div className="App">

        <div class="physiologic-states row">
          <div className="col-xs-6">
            <SerumOsmolality
              onSerumOsmsChange={this.onSerumOsmsChange}
            />
          </div>

          <div className="col-xs-6">
            <EffectiveArterialVolume
              onVolumeChange={this.onVolumeChange}
            />
          </div>
        </div>

        <div className="receptors row">
          <div className="col-xs-4">
            <Receptor.Osmoreceptor
              tonicState={this.state.tonicState}
            />
          </div>

          <div className="col-xs-4">
            <Receptor.Baroreceptor
              volumeState={this.state.volumeState}
            />
          </div>

          <div className="col-xs-4">
            <Receptor.MaculaDensa
              volumeState={this.state.volumeState}
            />
          </div>
        </div>

        <div className="organs">
          <div className="col-xs-6">

            <Organ.AdhNuclei
              tonicState={this.state.tonicState}
              volumeState={this.state.volumeState}
              onAdhChange={this.onAdhChange}
            />



            <Lab.UrineOsms
              adhState={this.state.tonicState}
            />

          </div>

          <div className="col-xs-6">
            <Organ.ReninSystem
              volumeState={this.state.volumeState}
            />

            <Organ.DistalConvolutedTubule
              volumeState={this.state.volumeState}
            />

            <Lab.UrineNa
              volumeState={this.state.volumeState}
            />

          </div>

        </div>



        </div>
    );
  }
}



export default App;
