import React from "react";
import axios from "axios";
import * as ArtistsActions from "../../Actions/ArtistsActions.js";
import ArtistsStore from "../../Stores/ArtistsStore";


export default class Content extends React.Component {
  constructor() {
    super();
    this.state = {
      artists: [

      ]
    }
  }

  setArtistName(name){
    this.setState({name});
  }

  componentDidMount() {
    ArtistsStore.on("change", () => {
      let listOfArtists = ArtistsStore.getAllArtists()
      console.log("LIST OF ARTISTS: ", listOfArtists);
      //Put artists in state
    });
  }

  render() {
    return (
      <section class="content-section">
        {this.state.artists}
      </section>
    );
  }
}