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

    console.log("onSubmitHandle...Updated state:", this.state);

    e.target.item.value = "";
  };

  onDeleteHandle() {
    console.log("onDeleteHandle...Arguments:", arguments);
    let id = arguments[0];

    this.setState({
      mockData: this.state.mockData.filter(item => {
        if (item.id !== id) {
          return item;
        }
      })
    });
  }

  onEditHandle(e) {
    console.log("onEditHandle...Arguments:", arguments[0], arguments[1]);
    console.log("onEditHandle...Old State:", this.state);
    this.setState({
      edit: true,
      id: arguments[0],
      title: arguments[1]
    });
    console.log("onEditHandle...new title?", this.state.title);
  }

  onCompleteHandle() {
    let id = arguments[0];
    this.setState({
      mockData: this.state.mockData.map(item => {
        if (item.id === id) {
          item["done"] = true;
          return item;
        }
        return item;
      })
    });
  }

  onUpdateHandle(e) {
    e.preventDefault();
    this.setState({
      mockData: this.state.mockData.map(item => {
        if (item.id === this.state.id) {
          item.title = e.target.updatedItem.value;
          return item;
        }
        return item;
      })
    });
    this.setState({ edit: false });
  }

  renderEditForm() {
    console.log("renderEditForm says the state is:", this.state);
    if (this.state.edit) {
      return (
        <form onSubmit={this.onUpdateHandle.bind(this)}>
          <input
            type="text"
            name="updatedItem"
            className="item"
            defaultValue={this.state.title}
          />
          <button className="update-add-item">Update Item</button>
        </form>
      );
    }
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <h3>Todo Component</h3>
        <form onSubmit={this.onSubmitHandle.bind(this)}>
          <input type="text" name="item" className="item" />
          <button className="btn-add-item">Add New Item</button>
          {this.renderEditForm()}
        </form>
        <ul>
          {this.state.mockData.map(item => (
            <li key={item.id}>
              {item.title}
              <button onClick={this.onDeleteHandle.bind(this, item.id)}>
                Delete-
              </button>
              <button onClick={this.onEditHandle.bind(this, item.id)}>
                Edit-
              </button>
              {/* <button onClick={this.onCompleteHandle.bind(this, item.id)}>
                Complete
              </button> */}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Todo;
