import React from "react";

const data = {
  user_1: { name: "Isabella", age: 22 },
  user_2: { name: "Ace", age: 25 },
  user_3: { name: "Luna", age: 23 },
  user_4: { name: "Zeke", age: 27 }
};

class RequestData extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clientData: {} };
    this.fetchData = this.fetchData.bind(this);
  }

  // Emulate server data fetch.
  fetchData(client) {
    setTimeout(() => {
      if (client in data) {
        this.setState({ clientData: data[client] });
      }
    }, 300);
  }

  componentDidUpdate(prevProps, prevState) {
    // Check whether client has changed.
    if (prevProps.client !== this.props.client) {
      this.fetchData(this.props.client);
    }
  }

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              {/* Headers */}
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {/* Table data */}
              <td>{this.state.clientData.name}</td>
              <td>{this.state.clientData.age}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default RequestData;
