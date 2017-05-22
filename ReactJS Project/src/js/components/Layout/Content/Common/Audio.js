import React from "react";

export default class Audio extends React.Component {
	constructor(){
		super();
	}

  render() {

    return (
      <audio controls class="audio">
       	<source src={this.props.preview}/>
      </audio>
    );
  }
}