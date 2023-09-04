import { Component } from 'react';
import NewBoxForm from './NewBoxForm';
import Box from './Box';
import { State } from '../types/State';

// interface Props {
//   addBox: () => void,
//   removeBox: () => void,
//   box: object;
// }

export default class BoxList extends Component<object, State, Element> {
  constructor(props: object) {
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
        { this.state.boxes.map((box: State): Element => (
          < Box key={ box.id } box={ box } removeBox={ () => this.removeBox(box.id) } />
        )) }
      </div>
    );
  }
}
