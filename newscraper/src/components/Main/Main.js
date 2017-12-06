import React, { Component } from 'react';
import API from '../../utils/API';

class Main extends Component {
  state = {
    articles: []
  }

  handleInputChange = event => {
    const { name,value } = event.target;
    this.setState({ [name]:value });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("form submitted");

  }

  render() {
    return (

    );
  }

}

export default Main;
