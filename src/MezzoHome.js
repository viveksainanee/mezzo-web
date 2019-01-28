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

  updateLocInHome(formState) {
    this.setState({
      loc1: formState.loc1,
      loc2: formState.loc2
    });
  }

  render() {
    console.log('this.state is', this.state);
    return (
      <div>
        <Form updateLocInHome={this.updateLocInHome} />
        <BizList />
      </div>
    );
  }
}

export default MezzoHome;
