import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';


export default class NewBoxForm extends Component {
  constructor(props) {
    super(props);
    this.state = { height: 0, width: 0, bgColor: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit (event) {
    event.preventDefault();
    const newBox = { ...this.state, id: uuidv4() };
    this.props.addBox(newBox);
    //clear form after adding
    this.setState({ height: 0, width: 0, bgColor: '' });
  }
  handleChange (event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  render () {
    return (
      <form onSubmit={ this.handleSubmit }>
        <label htmlFor='height'>Height(px) :
          <input
            type='number'
            name='height'
            id='height'
            value={ this.state.height }
            onChange={ this.handleChange } />
        </label>
        <label htmlFor='width'>Width(px) :
          <input
            type='number'
            name='width'
            id='width'
            value={ this.state.width }
            onChange={ this.handleChange } />
        </label>
        <label htmlFor='bgColor'>Color :
          <input
            type='text'
            name='bgColor'
            id='bgColor'
            value={ this.state.bgColor }
            onChange={ this.handleChange } />
        </label>
        <button>Add Box</button>
      </form>
    );
  }
}
