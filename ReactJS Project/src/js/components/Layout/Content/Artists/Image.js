import React from "react";

export default class Image extends React.Component {
	constructor(){
		super();
    this.state = {image: ""}
	}

  render() {
    //console.log("CONTENT RECEIVED ON IMAGE: ", this.state.image.url);
    return (
      <img class="artist-image" src={this.props.image}></img>
    );
  }
}