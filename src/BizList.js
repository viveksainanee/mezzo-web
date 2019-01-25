import React, { Component } from 'react';
import axios from 'axios';

class BizList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: []
    };
  }

  async componentDidMount() {
    let businessesResponse = await axios.get('http://localhost:3001/search');
    console.log(businessesResponse.data); // array of objects
    businessesResponse = businessesResponse.data.map(business => business.name);
    this.setState(st => ({ businesses: businessesResponse })); // errors out because
  }

  render() {
    return <div>{this.state.businesses}</div>;
  }
}

export default BizList;
