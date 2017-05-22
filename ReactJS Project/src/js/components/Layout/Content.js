import React from "react";
import axios from "axios";
import * as ArtistsActions from "../../Actions/ArtistsActions.js";
import ArtistsStore from "../../Stores/ArtistsStore";
import AlbumsStore from "../../Stores/AlbumsStore";
import SongsStore from "../../Stores/SongsStore";
import Artists from "./Content/Artists.js";
import Albums from "./Content/Albums.js";
import Songs from "./Content/Songs.js";


export default class Content extends React.Component {
  constructor() {
    super();
    this.state = {
      artists: undefined,
      albums: undefined,
      songs: undefined
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
    SongsStore.on("change", () => {
      let items = SongsStore.getAllSongs();
      this.setState({songs: items});
    })
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

    var songsMapper = "";
    if(this.state.songs != undefined){
      console.log("Que tiene songs dentro: ", this.state.songs);
      const listOfSongs = this.state.songs;
      let songsArray = new Array();
      listOfSongs.forEach((element) => songsArray.push(element));
      songsMapper = songsArray.map((element, index) => <Songs key={index} song={element}/>);
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
          {songsMapper}
        </section>
      </div>
    );
  }
}