import React from "react";
import Image from "./Common/Image.js";
import Name from "./Common/Name.js";
import * as AlbumsActions from "../../../Actions/AlbumsActions.js";
import * as SongsActions from "../../../Actions/SongsActions.js";

export default class Albums extends React.Component {
	constructor() {
		super();
	}

  handleClick() {
    const albumId = this.props.album.id;
    const albumName = this.props.album.name;
    const albums = this.props.album;
    console.log("Clicked on Album: ");
    console.log("Album Name: ", albumName);
    console.log("Album Id:: ", albumId);
    SongsActions.getSongs(albumId);
    AlbumsActions.selectAlbum(albumId);
  }

  render() {
    let name = "";
    let image = "";
    if(this.props.album != undefined){
     name = this.props.album.name;
     image = this.props.album.images[1].url;
    }
      return (
      <article onClick={this.handleClick.bind(this)} class="col-6 col-sm-3 article-container">
      	<Image image={image} />
        <Name name={name} />
      </article>
    );
  }
}