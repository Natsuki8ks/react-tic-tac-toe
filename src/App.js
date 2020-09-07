import React, { Component } from 'react';


class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      newItem: "",
      list: [],
      isDone: false,
    }
  }

  addItem = () => {
    if (this.state.newItem.trim() === '') {
      return
    }
    const id = this.state.id + 1;
    const item = {
      id,
      label: this.state.newItem
    }
    const list = [...this.state.list, item]

    this.setState({
      list,
      newItem: ""
    })
  }

  onChange = (e) => {
    this.setState({
      newItem: e.target.value
    })
  }

  deleteItem(id) {
    debugger
    const list = [...this.state.list];
    const updatedList = list.filter(item => item.id !== id)

    this.setState({
      list: updatedList
    })
  }


  editItem(id) {
    debugger
    const list = [...this.state.list]
    const updatedList = list.filter(item => item.id !== id)
    const selectedItem = this.state.list.find(item => item.id === id)

    this.setState({
      editItem: true,
      list: updatedList,
      newItem: selectedItem,
    })
  }


  render() {
    return (
      <div className="TodoApp">
        <h1>Add an Item...</h1>
        <br />
        <input
          type="text"
          placeholder="Type list here.."
          value={this.state.newItem}
          onChange={this.onChange}
        />
        <button
          className="add"
          // disabled={this.state.newItem.trim().length === 0}
          onClick={this.addItem}
        >
          {this.selectedItem ? "Done" : "Add"}
        </button>
        <br />
        <ul>
          {this.state.list.map(item => {
            return (
              <li key={item.label} >
                <input
                  type="checkbox"
                  className="checkbox"
                  // checked={  }
                />
                <span className={this.isDone ? 'done' : ''}>
                  {item.label}
                </span>

                <button className="edit"
                  onClick={() => this.editItem(item.id)}
                >
                  <i className="fa fa-pen"></i>
                </button>

                <button className="del"
                  onClick={() => this.deleteItem(item.id)}
                >
                  <i className="fa fa-trash"></i>
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
