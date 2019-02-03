import React, { Component } from 'react';
import './BizCard.css';

class BizCard extends Component {
  render() {
    return (
      <div className="BizCard">
        <div className="business-name"> {this.props.business.name}</div>
        <div className="business-rating">
          {this.props.business.rating}, {this.props.business.review_count}{' '}
          Reviews
        </div>
        <div className="business-price">{this.props.business.price}</div>
        <img
          className="business-image"
          src={this.props.business.image_url}
          alt="business"
        />
      </div>
    );
  }
}

export default BizCard;
