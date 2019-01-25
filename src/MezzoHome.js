import React, { Component } from 'react';
import Form from './Form';
import BizList from './BizList';

class MezzoHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loc1: '',
      loc2: ''
    };
    this.updateLocInHome = this.updateLocInHome.bind(this);
  }

  updateLocInHome(locNum, searchValue) {
    this.setState({
      [locNum]: searchValue
    });
  }

  render() {
    return (
      <div>
        <Form updateLocInHome={this.updateLocInHome} />
        <BizList />
      </div>
    );
  }
}

export default MezzoHome;
