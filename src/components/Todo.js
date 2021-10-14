import React, { Component } from "react";
import TodoList from "./TodoList";

export default class todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [],
    };

    this.addTodo = this.addTodo.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  currentTime() {
    let today = new Date(),
      time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    return time;
  }

  statusUpdate(id) {
    console.log("Status Update of Id: " + id);
    const list = [...this.state.todo];
    const remainder = list.filter((t) => t.id == id);
    remainder.completed = true;
    console.log(remainder);
  }

  handleRemove(id) {
    console.log("Deleted Todo with Id: " + id);
    const list = [...this.state.todo];
    const remainder = list.filter((t) => t.id !== id);
    this.setState({ todo: remainder });
  }

  addTodo(e) {
    e.preventDefault();
    console.log("Add");
    if (this._title.value !== "") {
      let newTodo = {
        id: 1 + Math.random(),
        title: this._title.value,
        description: this._description.value,
        time: this.currentTime(),
        completed: false,
      };

      this.setState((prevState) => {
        return {
          todo: prevState.todo.concat(newTodo),
        };
      });
      this._description.value = "";
      this._title.value = "";
    }
  }

  render() {
    return (
      <div
        style={{
          width: "411px",
          margin: "0 auto",
        }}
      >
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "10px",
          }}
          onSubmit={this.addTodo}
        >
          <input
            style={{ padding: "10px", outline: "none", fontSize: "20px" }}
            type="text"
            placeholder="Add New Todo Title"
            ref={(a) => (this._title = a)}
          />
          <input
            style={{ padding: "10px", outline: "none", fontSize: "16px" }}
            type="text"
            placeholder="Todo Description"
            ref={(a) => (this._description = a)}
          />
          <button
            style={{ padding: "5px", border: "none", background: "purple" }}
          >
            Add
          </button>
        </form>
        {this.state.todo.map((t) => (
          <TodoList
            key={t.id}
            id={t.id}
            title={t.title}
            description={t.description}
            time={t.time}
            completed={t.completed}
            remove={this.handleRemove}
            statusUpdate={this.statusUpdate}
          />
        ))}
      </div>
    );
  }
}
