import React, { Component } from 'react';
import uuid from 'uuid/v4';
import BizCard from './BizCard';

class BizList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: []
    };
  }

  async componentDidUpdate() {
    // console.log('CDM2 locations are', this.props.locations);
  }

  render() {
    console.log('RENDER locations are', this.props.locations);

    let bizCards = this.props.businesses.map(business => (
      <BizCard business={business} key={uuid()} />
    ));
    return <div>{bizCards}</div>;
  }
}

export default BizList;
