import React, { Component } from 'react'
import { TonicStates, VolumeStates } from '../lib.js'

export class Receptor extends Component {
  constructor(props) {
  	super(props);
  	this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
  	this.props.onReceptorChange(e.target.value);
  }

  render() {
    return (
      <div>
          <h1 className="receptor-name">{this.props.name} </h1>
          <span className="sensed-state">{this.props.receptorState}</span>
      </div>
    );
  }
}

export class Osmoreceptor extends Component{

	render(){
		return(
			<Receptor name="Osmoreceptor"
     		receptorState={this.props.tonicState}
      />
		)
	}
}

export class Baroreceptor extends Component {
  render(){
    return(
      <Receptor name="Baroreceptor"
          receptorState={this.props.volumeState}
      />
    )
  }
}

export class MaculaDensa extends Component {

  getResponse(){
    switch(this.props.volumeState){
      case VolumeStates.hyper:
        return ""
    }
  }

  render(){
    return(
      <Receptor
        name="Macula Densa"
        receptorState={this.props.volumeState}
      />
    )
  }
}
