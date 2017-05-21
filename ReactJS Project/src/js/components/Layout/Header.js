import React from "react";
import Title from "./Header/Title.js";
import Search from "./Header/Search.js";

export default class Header extends React.Component {
	constructor(props){
		super(props);
	}

	doSearch(message) {
		this.props.changeMessage(message);
	}

  render() {
    return (
      <header class="header">
      	<Title />
      	<Search doSearch={this.doSearch.bind(this)}/>
      </header>
    );
  }
}
