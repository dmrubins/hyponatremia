import React, { Component } from 'react'
import { AdhStates, TonicStates, VolumeStates } from '../lib.js'

export class PhysiologicState extends Component{

  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e){
    this.props.onStateChange(e.target.value)
  }

  render(){

    return(
      <div>
        <h2>{this.props.name}</h2>
        <br />
        {Object.keys(this.props.states).map(state=>{
          return (
            <button onClick={this.handleClick} value={this.props.states[state]}>
              {this.props.states[state]}
            </button>
          )
        })}
      </div>
    )
  }
}

export class SerumOsmolality extends Component {

  render(){
    return (
      <PhysiologicState
        name="Serum Osmolality"
        states={TonicStates}
        onStateChange={this.props.onSerumOsmsChange}
      />
    )
  }
}

export class EffectiveArterialVolume extends Component {
  render(){
    return (
      <PhysiologicState
        name="Effective Arterial Volume"
        states={VolumeStates}
        onStateChange={this.props.onVolumeChange}
      />
    )
  }
}
