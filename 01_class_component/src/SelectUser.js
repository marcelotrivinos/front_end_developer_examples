import React from "react";
import RequestData from "./RequestData";

const options = ["User 1", "User 2", "User 3", "User 4"];

class SelectUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = { client: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      client: event.target.value
    });
  }

  render() {
    return (
      <div className="container-select-user">
        <label form="users">Choose an user:</label>
        <select
          id="users"
          value={this.state.client}
          onChange={this.handleChange}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <RequestData
          client={this.state.client.toLowerCase().replace(/ /g, "_")}
        ></RequestData>
      </div>
    );
  }
}

export default SelectUser;
