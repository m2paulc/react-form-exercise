import { State } from '../types/State';

function Box (props: State) {
  const divStyle = {
    height: `${ props.box.height }px`,
    width: `${ props.box.width }px`,
    backgroundColor: `${ props.box.bgColor }`
  };
  const show = (): Element => (
    props.box.height && props.box.width ?
      (< div >
        <div style={ divStyle }>
        </div>
        <button onClick={ props.removeBox }>Remove this Item</button>
      </div >) : (<p>Add height, width and color to render a Box.</p>)
  );
  return (
    show()
  );
}

export default Box;