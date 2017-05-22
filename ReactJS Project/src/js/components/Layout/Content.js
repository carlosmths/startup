import React from "react";
import axios from "axios";
import * as ArtistsActions from "../../Actions/ArtistsActions.js";
import ArtistsStore from "../../Stores/ArtistsStore";
import AlbumsStore from "../../Stores/AlbumsStore";
import Artists from "./Content/Artists.js";
import Albums from "./Content/Albums.js";


export default class Content extends React.Component {
  constructor() {
    super();
    this.state = {
      artists: undefined,
      albums: undefined
    }
  }

  getArtists() {
    return this.state.artists;
  }

  componentDidMount() {
    ArtistsStore.on("change", () => {
      let items = ArtistsStore.getAllArtists();
      this.setState({artists: items});
    });
    AlbumsStore.on("change", () => {
      let items = AlbumsStore.getAllAlbums();
      this.setState({albums: items});
    });
  }

  render() {
    var artistsMapper = "";
    if(this.state.artists != undefined){
      //console.log("Que tiene artists dentro: ", this.state.artists);
      const listOfArtists = this.state.artists;
      let artistsArray = new Array();
      listOfArtists.forEach((element) => artistsArray.push(element));
      artistsMapper = artistsArray.map((element, index) => <Artists key={index} artist={element}/>);
    }

    var albumsMapper = "";
    if(this.state.albums != undefined){
      //console.log("Que tiene albums dentro: ", this.state.albums);
      const listOfAlbums = this.state.albums;
      let albumsArray = new Array();
      listOfAlbums.forEach((element) => albumsArray.push(element));
      albumsMapper = albumsArray.map((element, index) => <Albums key={index} album={element}/>);
    }

    return (
      <div class="grow">
        <section class="content-section">
          {artistsMapper}
        </section>
        <section class="album-section">
          {albumsMapper}
        </section>
        <section class="playlist-section">
          
        </section>
      </div>
    );
  }
}