import React from "react";
import axios from "axios";
import * as ArtistsActions from "../../Actions/ArtistsActions.js";
import ArtistsStore from "../../Stores/ArtistsStore";
import Artists from "./Content/Artists.js"


export default class Content extends React.Component {
  constructor() {
    super();
    this.state = {
      artists: undefined
    }
  }

  getArtists() {
    return this.state.artists;
  }

  componentWillMount() {
    ArtistsStore.on("change", () => {
      let items = ArtistsStore.getAllArtists();
      this.setState({artists: items});
    });
  }

  render() {
    var mapping = "";
    if(this.state.artists != undefined){
      //console.log("Que tiene artists dentro: ", this.state.artists);
      const listOfArtists = this.state.artists;
      let artistsArray = new Array();
      listOfArtists.forEach((element) => artistsArray.push(element));
      console.log(artistsArray);
      mapping = artistsArray.map((element, index) => <Artists key={index} artist={element}/>);
    }

    return (
      <section class="content-section">
        {mapping}
      </section>
    );
  }
}