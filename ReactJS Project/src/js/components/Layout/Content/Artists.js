import React from "react";
import Image from "./Common/Image.js";
import Name from "./Common/Name.js";
import * as AlbumsActions from "../../../Actions/AlbumsActions.js";
import * as ArtistsActions from "../../../Actions/ArtistsActions.js";

export default class Artists extends React.Component {
	constructor() {
		super();
	}

  handleClick() {
    //HERE: Implement the call to AlbumsActions to find the albums of the selected artist.
    // console.log("STOP CLICKING ME: ", this.props.artist.name, this.props.artist.id);
    const artistId = this.props.artist.id;
    const artists = this.props.artist;
    console.log("Clicked on Artist: ");
    console.log("Artist Name: ", this.props.artist.name);
    console.log("Artist Id:: ", artistId);
    AlbumsActions.getAlbums(artistId);
    ArtistsActions.selectArtist(artistId);
  }

  render() {
    let image = "";
    let name = "";
    if(this.props.artist != undefined){
      image = this.props.artist.images[1].url;
      name = this.props.artist.name;
    }
      return (
      <article onClick={this.handleClick.bind(this)} class="col-6 col-sm-3 article-container">
      	<Image image={image}/>
        <Name name={name}/>
      </article>
    );
  }
}