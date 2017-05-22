import React from "react";
import * as ArtistsActions from "../../../Actions/ArtistsActions.js";

export default class Title extends React.Component {
	constructor() {
		super();
		this.state = {
			search: ""
		}
	}

  handleChange(e) {
    const newMessage = e.target.value;
    this.setState({search: newMessage});
  }

  handleClick() {
    ArtistsActions.getArtists(this.state.search);
  }

  render() {
    return (
      <div>
      	<input type="text" class="margin-r-10" onChange={this.handleChange.bind(this)}/>

      	<button id="btnSearch" onClick={this.handleClick.bind(this)} class="btn btn-success">Find artist</button>
      </div>
    );
  }
}