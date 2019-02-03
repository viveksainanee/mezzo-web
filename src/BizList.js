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

  render() {
    let bizCards = this.props.businesses.map(business => (
      <BizCard business={business} key={uuid()} />
    ));
    return <div>{bizCards}</div>;
  }
}

export default BizList;
