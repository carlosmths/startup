import React from "react";
import Title from "./Header/Title.js";
import Search from "./Header/Search.js";

export default class Header extends React.Component {
	constructor(props){
		super(props);
	}

	makeMsgChange(message) {
		this.props.changeMessage(message);
	}

  render() {
    return (
      <header class="header">
      	<Title />
      	<Search makeMsgChange={this.makeMsgChange.bind(this)}/>
      </header>
    );
  }
}
