import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loc1: '',
      loc2: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.fetchBusinesses(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="loc1"
          onChange={this.handleChange}
          value={this.state.loc1}
          placeholder="First Location"
        />

        <input
          name="loc2"
          onChange={this.handleChange}
          value={this.state.loc2}
          placeholder="Second Location"
        />
        <input type="submit" onChange={this.handleSubmit} value="Submit" />
      </form>
    );
  }
}

export default Form;
