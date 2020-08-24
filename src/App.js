import React, { Component } from 'react';


class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 1,
      newItem: "",
      list: []
    }
  }

  updateInput(key, value) {
    this.setState({
      [key]: value
    });
  }

  addItem = () => {
    // if (this.state.newItem.trim() === '') {
    //   return;
    // }

    const id = this.state.id + 1;
    const item = {
      id,
      value: this.state.newItem
    };

    const list = [...this.state.list, item];

    this.setState({
      id,
      newItem: "",
      list
    });
  }

  deleteItem(id) {
    const list = [...this.state.list];
    const updatedList = list.filter(item => item.id !== id);

    this.setState({ list: updatedList })
  }


  checkTodo() {

  }

  render() {
    debugger
    return (
      <div className="TodoApp">
        <h1>Add an Item...</h1>
        <br />
        <input
          type="text"
          placeholder="Type list here.."
          value={this.state.newItem}
          onChange={e => this.updateInput("newItem", e.target.value)}
        />
        <button 
          className="add"
          disabled={this.state.newItem.trim().length === 0}
          onClick={this.addItem}
        >
          Add
        </button>
        <br />
        <ul>
          {this.state.list.map(item => {
            return (
              <li key={item.id}>
                <input type="checkbox" className="checkbox" />
                {item.value}
                <button className="del"
                  onClick={() => this.deleteItem(item.id)}
                >
                  X
               </button>
              
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default TodoApp;
