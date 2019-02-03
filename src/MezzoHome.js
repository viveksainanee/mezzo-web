import React, { Component } from 'react';
import axios from 'axios';

import Form from './Form';
import BizList from './BizList';

class MezzoHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: []
    };
    this.fetchBusinesses = this.fetchBusinesses.bind(this);
  }

  async fetchBusinesses(formState) {
    //get data from Yelp
    let businessesResponse = await axios.get(
      `http://localhost:3001/search?loc1=${formState.loc1}&loc2=${
        formState.loc2
      }`
    );
    //reformat data to just the info we need
    businessesResponse = businessesResponse.data.map(business => ({
      name: business.name,
      image_url: business.image_url,
      rating: business.rating,
      review_count: business.review_count,
      price: business.price
    }));
    //update state with biz list
    this.setState({
      businesses: businessesResponse
    });
  }

  render() {
    return (
      <div>
        <Form fetchBusinesses={this.fetchBusinesses} />
        <BizList businesses={this.state.businesses} />
      </div>
    );
  }
}

export default MezzoHome;
