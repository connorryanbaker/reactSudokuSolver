import React from 'react';
class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
    };
    this.changeValue = this.changeValue.bind(this);
  }

  changeValue(val) {
    if (this.props.fixed) return;
    this.setState({
      value: val
    });
  }

  render() {
    return (
      <li className="grid-cell">
        {this.state.value}
      </li>
    );
  }
}

export default Tile;