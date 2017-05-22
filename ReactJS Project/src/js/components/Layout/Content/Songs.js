import React from "react";
import Name from "./Common/Name.js";
import Audio from "./Common/Audio.js";
import * as AlbumsActions from "../../../Actions/AlbumsActions.js";
import * as SongsActions from "../../../Actions/SongsActions.js";

export default class Songs extends React.Component {
  constructor() {
    super();
  }

  handleClick() {
    let external = this.props.song.external_urls.spotify;
    window.open(external, '_blank');
  }

  render() {
    let name = this.props.song.name;
    let preview = this.props.song.preview_url;
    let external = this.props.song.external_urls.spotify;
    return (
      <article class="col-6 col-sm-3 article-container">
        <Audio preview={preview}/>
        <a href="#" onClick={this.handleClick.bind(this)}>
          <Name name={name}/>
        </a>
      </article>
    );
  }
}