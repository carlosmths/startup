import React from "react";
import Header from "./Layout/Header.js";
import Content from "./Layout/Content.js";
export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "Hola Carlos",
    };
  }

  changeMessage(message) {
    this.setState({message});
  }

  render() {
    return (
      <div class="full-parent-size">
        <Header changeMessage={this.changeMessage.bind(this)}/>
        <Content message={this.state.message}/>
      </div>
      
    );
  }
}
