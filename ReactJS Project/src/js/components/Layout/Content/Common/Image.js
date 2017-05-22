import React from "react";

export default class Image extends React.Component {
	constructor(){
		super();
	}

  render() {
    return (
      <img class="artist-image" src={this.props.image}></img>
    );
  }
}