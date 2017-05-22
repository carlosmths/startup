import React from "react";
import Image from "./Artists/Image.js";
import Name from "./Artists/Name.js";

export default class Artists extends React.Component {
	constructor() {
		super();
	}

  handleClick() {
    console.log("STOP CLICKING ME: ", this.props.artist.name);
  }

  render() {
    const image = this.props.artist.images[1].url;
    const name = this.props.artist.name;
      return (
      <article onClick={this.handleClick.bind(this)} class="col-6 col-sm-3 article-container">
      	<Image image={image}/>
        <Name name={name}/>
      </article>
    );
  }
}