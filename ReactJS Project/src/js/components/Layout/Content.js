import React from "react";
import axios from "axios";
import * as ArtistsActions from "../../Actions/ArtistsActions.js";
import ArtistsStore from "../../Stores/ArtistsStore";


export default class Content extends React.Component {
  constructor() {
    super();
    this.state = {
      artists: "Fill with artists"
    }
  }

  setArtistName(name){
    this.setState({name});
  }

  showName() { 
    ArtistsActions.getArtists("ESTE ES MI NOMBRE");
  }

  render() {
    setTimeout(() => {
      this.showName();
    }, 1000)
    return (
      <section class="content-section">
        
      </section>
    );
  }
}