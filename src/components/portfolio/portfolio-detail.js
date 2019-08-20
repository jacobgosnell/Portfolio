import React, { Component } from "react";
import axios from "axios";

export default class PortfolioDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.getOnePortfolioItem = this.getOnePortfolioItem.bind(this);
  }

  componentWillMount () {
    this.getOnePortfolioItem();
  }
  
  getOnePortfolioItem () {
    axios.get(`https://jake.devcamp.space/portfolio/portfolio_items/${this.props.match.params.slug}`
    ).then(response => {
      console.log("response", response);
    }).catch(error => {
      console.log("getPortfolioItem Error", error);
    });
  }

  render() {
    return (
      <div>
        <h2 onClick={this.getOnePortfolioItem}>Portfolio Detail for {this.props.match.params.slug}</h2>
      </div>
    )
  }
}