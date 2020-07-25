import React, { Component } from 'react';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      newItem:"",
      list:[]
    }
  }


  updateInput(key,value){
    this.setState({
      [key]: value
    });
  }

  addItem() {
    const newItem= {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };

    //copy of current list
    const list = [...this.state.list];

    //add new item to list
    list.push(newItem);
    
    //reset
    this.setState({
      list,
      newItem: ""
    });
  }

  deleteItem(id) {
    const list = [...this.state.list];

    const updatedList = list.filter(item => item.id !== id);
    this.setState({list: updatedList})
  }

  render(){
  return (
    <div className="App">
      <h1>Add an Item...</h1>
      <br />
        {/* <form> */}
          <input 
            type="text"
            placeholder="Type list here.."
            value={this.state.newItem}
            onChange={e => this.updateInput("newItem", e.target.value)}
          />
          <button class="add"
            onClick={() => this.addItem()}
            >
            Add
          </button>
        {/* </form> */}
      <br />
      <ul>
        {this.state.list.map(item => {
          return(
            <li key={item.id}>
              ✔&nbsp;{item.value}
              <button class="del"
                onClick={() => this.deleteItem(item.id)}
              >
                del
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  );
 }
}

export default App;
