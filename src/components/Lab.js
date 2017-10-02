import React, { Component } from 'react'
import { AdhStates, VolumeStates } from '../lib.js'

export class Lab extends Component{

  render(){
    return(
      <div>
        <h2 class="lab-name">{this.props.labName}</h2>
        <span class="lab-value">{this.props.labValue}</span>
      </div>
    )
  }
}

export class UrineOsms extends Component{

  getValue(){
    switch(this.props.adhState){
      case AdhStates.hyper:
        return ">300"
      case AdhStates.hypo:
        return "<100"
      default:
        return "100-300"
    }
  }

  render(){
    return(
      <Lab
        labName="Urine Osms"
        labValue={this.getValue()}
      />
    )
  }
}

export class UrineNa extends Component{
  getValue(){
    switch(this.props.volumeState){
      case VolumeStates.hyper:
        return ">40"
      case VolumeStates.hypo:
        return "<20"
      default:
        return "20-40"
    }
  }

  render(){
    return(
      <Lab
        labName="Urine Na"
        labValue={this.getValue()}
      />
    )
  }

}
