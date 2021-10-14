import React, { Component } from "react";

export default class TodoList extends Component {
  render() {
    return (
      <div
        style={{
          border: "1px solid grey",
          width: "400px",
          margin: "5px auto",
          height: "100%",
          padding: "5px",
          background: this.props.completed ? "lightGreen" : "white",
        }}
      >
        <div>
          <h3>{this.props.title}</h3>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p>{this.props.description}</p>
            <p>{this.props.time}</p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <button
            style={{ background: "red", border: "none", padding: "5px" }}
            onClick={() => {
              this.props.remove(this.props.id);
            }}
          >
            Delete
          </button>
          <button
            style={{ background: "yellow", border: "none", padding: "5px" }}
          >
            Edit
          </button>
          <button
            style={{ background: "green", border: "none", padding: "5px" }}
            onClick={() => {
              this.props.statusUpdate(this.props.id);
            }}
          >
            Completed
          </button>
        </div>
      </div>
    );
  }
}
