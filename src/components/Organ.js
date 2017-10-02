import React, { Component } from 'react'
import { AdhStates, TonicStates, VolumeStates } from '../lib.js'

class Organ extends Component {
  render() {
    return (
      <div className="responder">
        <h2>{this.props.name}</h2>
        <span className={"action " + this.props.state}>{this.props.action}</span>
      </div>
    )
  }
}

export class AdhNuclei extends Component {

  getResponse(){
    if (this.props.volumeState == VolumeStates.hypo){
      return "Increase ADH"
    }

    switch(this.props.tonicState){
      case TonicStates.hyper:
        this.props.setAdhStatus(AdhState.hyper)
        return "Decrease ADH"
      case TonicStates.hypo:
        this.props.setAdhStatus(AdhState.hypo)
        return "Increase ADH"
      case TonicStates.eu:
        return "Normal ADH"
      default:
        return ''
    }
  }

  render(){
    return (
      <div>
      <Organ
        name="ADH Nuclei"
        action={this.getResponse()}
        state={this.props.adhState}
      />

      <Organ.CollectingDucts
        adhState={this.adhStatus}
      />

      </div>

    )
  }

}

export class CollectingDucts extends Component {

  getResponse(){
    switch(this.props.adhState){
      case AdhStates.hyper:
        return "Decrease Urine Volume"
      case AdhStates.hypo:
        return "Increase Urine Volume"
      default:
        return "Normal Urine Volume"
    }
  }

  render(){
    return (
      <Organ
        name="Collecting Ducts"
        action={this.getResponse()}
      />
    )
  }
}

export class ReninSystem extends Component {

  getResponse(){
    switch(this.props.volumeState){
      case VolumeStates.hyper:
        return "Decrease Aldosterone"
      case VolumeStates.hypo:
        return "Increase Aldosterone"
      default:
        return "Normal Aldosterone"
    }
  }

  render(){
    return(
      <Organ
        name="Renin System"
        action={this.getResponse()}
      />
    )
  }
}

export class DistalConvolutedTubule extends Component {
  getResponse(){
    switch(this.props.volumeState){
      case VolumeStates.hyper:
        return "Reabsorb Sodium"
      case VolumeStates.hypo:
        return "Lose Sodium"
      default:
        return "Normal Urine Sodium"
    }
  }

  render(){
    return (
      <Organ
        name="Distal Convoluted Tubule"
        action={this.getResponse()}
      />
    )
  }

}

export default Organ;
