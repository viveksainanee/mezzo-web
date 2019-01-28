import React, { Component } from 'react';

class BizCard extends Component {
  render() {
    return (
      <div>
        <img src={this.props.business.image_url} width={100} />
        {this.props.business.name}
      </div>
    );
  }
}

export default BizCard;
