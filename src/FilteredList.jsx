import React, { Component } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import List from './List';

class FilteredList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      type: 'all',
    };
  }

  onSearch = (event) => {
    this.setState({ search: event.target.value.trim().toLowerCase() }, () => {
      this.forceUpdate(); // Force a re-render after the state is updated
    });
  };

  handleTypeSelect = (type) => {
    this.setState({ type }, () => {
      this.forceUpdate(); // Force a re-render after the state is updated
    });
  };

  filterItem = (item) => {
    const nameMatch = item.name.toLowerCase().search(this.state.search) !== -1;
    const typeMatch = this.state.type === 'all' || this.state.type === item.type;

    const result = nameMatch && typeMatch;
    return result;
  };

  render() {
    return (
      <div className="filter-list">
        <h1>Produce Search</h1>
        <DropdownButton id="typeDropdown" title={this.state.type === 'all' ? 'All Types' : this.state.type}>
          <Dropdown.Item eventKey="all" onSelect={() => this.handleTypeSelect('all')}>
            All Types
          </Dropdown.Item>
          <Dropdown.Item eventKey="fruit" onSelect={() => this.handleTypeSelect('fruit')}>
            Fruit
          </Dropdown.Item>
          <Dropdown.Item eventKey="vegetable" onSelect={() => this.handleTypeSelect('vegetable')}>
            Vegetable
          </Dropdown.Item>
        </DropdownButton>
        <input type="text" placeholder="Search" onChange={this.onSearch} />
        <List items={this.props.items.filter(this.filterItem)} />
      </div>
    );
  }
}

export default FilteredList;
