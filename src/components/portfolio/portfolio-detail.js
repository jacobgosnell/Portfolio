import React, { Component } from "react";
import axios from "axios";

export default class PortfolioDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      portfolioItem: {}
    };

    this.getOnePortfolioItem = this.getOnePortfolioItem.bind(this);
  }

  componentWillMount () {
    this.getOnePortfolioItem();
  }

  getOnePortfolioItem () {
    axios.get(`https://jake.devcamp.space/portfolio/portfolio_items/${this.props.match.params.slug}`
    ).then(response => {
      console.log("response", response);
      this.setState({
        portfolioItem: response.data.portfolio_item
      })

    }).catch(error => {
      console.log("getPortfolioItem Error", error);
    });
  }

  render() {
    const {
      banner_image_url,
      category, 
      description, 
      logo_url, 
      name,
      thumb_image_url, 
      url
    } = this.state.portfolioItem;

    return (
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    )
  }
}