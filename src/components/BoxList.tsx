import React, { Component } from 'react';
import NewBoxForm from './NewBoxForm';
import Box from './Box';
import { State } from '../types/State';

export default class BoxList extends Component<Props, State[]> {
  constructor(props) {
    super(props);
    this.state = { boxes: [] };
    this.addBox = this.addBox.bind(this);
  }
  addBox (box: State) {
    this.setState(state => ({
      boxes: [...state.boxes, box]
    }));
  }
  removeBox (id) {
    this.setState({
      boxes: this.state.boxes.filter(box => box.id !== id)
    });
  }
  render () {
    return (
      <div>
        <NewBoxForm addBox={ this.addBox } />
        { this.state.boxes.map((box) => (
          < Box key={ box.id } box={ box } removeBox={ () => this.removeBox(box.id) } />
        )) }
      </div>
    );
  }
}
