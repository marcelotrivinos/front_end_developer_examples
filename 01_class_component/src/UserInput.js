import React from "react";

class UserInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.setState({ value: "" });
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="container-form">
        <form onSubmit={this.handleSubmit}>
          <label for="name">
            Name:
            <input
              id="name"
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            ></input>
          </label>

          <input className="form-row" type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
}

export default UserInput;
