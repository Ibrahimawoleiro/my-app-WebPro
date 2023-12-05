import React, { Component } from 'react';

class List extends Component {
  renderList() {
    /*
    Use map to iterate through each item in the list and create a list element
    that displays both the name and type.
    */
    const items = this.props.items.map(item => {
      return (
        <li key={item.name}>
          {item.name} - {item.type}
        </li>
      );
    });
    return items;
  }

  render() {
    return <ul>{this.renderList()}</ul>;
  }
}

export default List;
