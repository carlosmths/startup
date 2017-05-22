import React from "react";

export default class Name extends React.Component {
	constructor(){
		super();
	}

  render() {
    return (
      <p class="center">{this.props.name}</p>
    );
  }
}