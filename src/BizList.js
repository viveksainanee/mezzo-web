import React, { Component } from 'react';
import axios from 'axios';
import BizCard from './BizCard';

class BizList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: []
    };
  }

  async componentDidMount() {
    let businessesResponse = await axios.get('http://localhost:3001/search');
    businessesResponse = businessesResponse.data.map(business => ({
      name: business.name,
      image_url: business.image_url
    }));
    this.setState(st => ({ businesses: businessesResponse }));
  }

  render() {
    let bizCards = this.state.businesses.map(business => (
      <BizCard business={business} />
    ));
    return <div>{bizCards}</div>;
  }
}

export default BizList;
