import React, { Component } from "react";

class Todo extends Component {
  state = {
    edit: false,
    id: null,
    mockData: [
      { id: 1, title: "Buy Milk", done: false, date: new Date() },
      { id: 2, title: "Pay Bills", done: false, date: new Date() },
      { id: 3, title: "Walk Dog", done: false, date: new Date() },
      { id: 4, title: "Go For A Run", done: false, date: new Date() }
    ]
  };

  onSubmitHandle = e => {
    e.preventDefault();

    this.setState({
      mockData: [
        ...this.state.mockData,
        {
          id: Date.now(),
          title: e.target.item.value,
          done: false,
          date: new Date()
        }
      ]
    });

    e.target.item.value = "";
  };

  onDeleteHandle() {
    let id = arguments[0];

    this.setState({
      mockData: this.state.mockData.filter(item => {
        if (item.id !== id) {
          return item;
        }
      })
    });
  }

  

  render() {
    return (
      <div>
        <h1>Todo Component here!</h1>
        <form onSubmit={this.onSubmitHandle.bind(this)}>
          <input type="text" name="item" className="item" />
          <button className="btn-add-item">Add</button>
        </form>
        <ul>
          {this.state.mockData.map(item => (
            <li key={item.id}>
              {item.title}
              <button onClick={this.onDeleteHandle.bind(this, item.id)}>
                Delete
              </button>
              <button onClick={this.onEditHandle.bind(this, item.id)}>
                Delete
              </button>
              <button onClick={this.onCompleteHandle.bind(this, item.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Todo;
