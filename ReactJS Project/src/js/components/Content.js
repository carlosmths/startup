import React from "react";


export default class Content extends React.Component {

  render() {
    return (
      <section class="content-section">
   			{this.props.message}
      </section>
    );
  }
}