import React, { Component } from "react";

class ClassCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cardTitle: "My First Component",
      cardDetails: "Here some details... 😁",
    };
  }

  render() {
    return (
      <div
        style={{
          backgroundColor: "lavender",
          border: "1px solid pink",
        }}
      >
        <h1>{this.state.cardTitle}</h1>
        <p>{this.state.cardDetails}</p>
      </div>
    );
  }
}

export default ClassCard;
