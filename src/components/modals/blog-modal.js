import React, { Component } from "react";
import ReactModal from "react-modal";

export default class BlogModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ReactModal isOpen={true}>
        <h1>Inside of a Modal</h1>
      </ReactModal>
    );
  }
}