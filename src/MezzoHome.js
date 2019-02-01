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
    this.updateLocInHome = this.updateLocInHome.bind(this);
  }

  async updateLocInHome(formState) {
    let businessesResponse = await axios.get(
      `http://localhost:3001/search?loc1=${formState.loc1}&loc2=${
        formState.loc2
      }`
    );
    businessesResponse = businessesResponse.data.map(business => ({
      name: business.name,
      image_url: business.image_url
    }));
    this.setState({
      businesses: businessesResponse
    });
  }

  render() {
    return (
      <div>
        <Form updateLocInHome={this.updateLocInHome} />
        <BizList businesses={this.state.businesses} />
      </div>
    );
  }
}

export default MezzoHome;
