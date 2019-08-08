import React, { Component } from "react";
import axios from "axios";

export default class BlogForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      blog_status: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  buildForm () {
    let formData = new FormData();

    formData.append("portfolio_blog[title]", this.state.title);
    formData.append("portfolio_blog[blog_status]", this.state.blog_status);

    return formData;
  }

  handleSubmit (event) {
    axios.post("https://jake.devcamp.space/portfolio/portfolio_blogs", this.buildForm(), { withCredentials: true})
    .then(response => {
      this.props.handleSuccessfullFormSubmission(response.data);
      this.setState({
        title: "",
        blog_status: ""
      })
    }).catch(error => {
      console.log("handleSubmit for blog error", error);
    });
    
    event.preventDefault();
  }
  
  handleChange (event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          onChange={this.handleChange} 
          type="text"
          name="title"
          placeholder="Blog Title"
          value={this.state.title}
        />
        <input 
          onChange={this.handleChange} 
          type="text"
          name="blog_status"
          placeholder="Blog Title"
          value={this.state.blog_status}
        />
        <button>Save</button>
      </form>
    );
  }
}