import React, { Component, ChangeEvent } from 'react';
import { v4 as uuidv4 } from 'uuid';

type MyState = {
  height: string,
  width: string,
  bgColor: string,
};

type Props = {
  addBox: (newBox: MyState) => void;
};

export default class NewBoxForm extends Component<Props, MyState, React.FormEvent<HTMLFormElement>> {
  constructor(props: Props) {
    super(props);
    this.state = { height: '', width: '', bgColor: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit (event: React.SyntheticEvent) {
    event.preventDefault();
    const newBox = { ...this.state, id: uuidv4() };
    this.props.addBox(newBox);
    //clear form after adding
    this.setState({ height: '', width: '', bgColor: '' });
  }
  handleChange (event: ChangeEvent<HTMLInputElement>) {
    this.setState({ [event.target.name]: event.target.value } as Pick<MyState, keyof MyState>);
  }
  render () {
    return (
      <form onSubmit={ this.handleSubmit }>
        <label htmlFor='height'>Height(px) :
          <input
            type='text'
            name='height'
            id='height'
            value={ this.state.height }
            onChange={ this.handleChange } />
        </label>
        <label htmlFor='width'>Width(px) :
          <input
            type='text'
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
