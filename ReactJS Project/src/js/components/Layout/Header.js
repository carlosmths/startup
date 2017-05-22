import React from "react";
import Title from "./Header/Title.js";
import Search from "./Header/Search.js";

export default class Header extends React.Component {
	constructor(){
		super();
	}

  render() {
    return (
      <header class="header">
      	<Title />
      	<div class="center"><Search /></div>
      </header>
    );
  }
}
