import React from "react";

export default class Title extends React.Component {
	constructor() {
		super();
		this.state = {
			title: "Welcome to Spotify App"
		}
	}
  render() {
    return (
      <h1>{this.state.title}</h1>
    );
  }
}
