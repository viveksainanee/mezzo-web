import React, { Component } from 'react';
import './BizCard.css';

class BizCard extends Component {
  render() {
    return (
      <div className="BizCard">
        <img src={this.props.business.image_url} width={300} alt="business" />
        <div className="business-name"> {this.props.business.name}</div>
      </div>
    );
  }
}

export default BizCard;
