import React from "react";
import Image from "./Common/Image.js";
import Name from "./Common/Name.js";
import * as AlbumsActions from "../../../Actions/AlbumsActions.js";

export default class Albums extends React.Component {
	constructor() {
		super();
	}

  render() {
      console.log(this.props.album);
      const name = this.props.album.name;
      const image = this.props.album.images[1].url;
      return (
      <article /*onClick={this.handleClick.bind(this)}*/ class="col-6 col-sm-3 article-container">
      	<Image image={image} />
        <Name name={name} />
      </article>
    );
  }
}