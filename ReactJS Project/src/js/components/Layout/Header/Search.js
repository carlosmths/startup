import React from "react";

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
    this.props.doSearch(this.state.search)
  }
  render() {
    return (
      <div>
      	<input type="text" onChange={this.handleChange.bind(this)}/>

      	<button id="btnSearch" onClick={this.handleClick.bind(this)} class="btn btn-success">Buscar</button>
      </div>
    );
  }
}