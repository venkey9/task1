import React from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export default class Form extends React.Component {
  state = {
    Employee: "",
    Role: "",
    Experience: ""
  };

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };


  onSubmit = e => {
    e.preventDefault();
      this.props.onSubmit(this.state);
      this.setState({
        Employee: "",
        Role: "",
        Experience: ""
      });
    
  };

  render() {
    return (
      <div>
      <h2>Notes of Employee Details</h2>
      <form>
        <TextField
          name="Employee"
          floatingLabelText="Emplyee name"
          hintText="Employee Name"
          value={this.state.Employee}
          onChange={e => this.change(e)}
        />
        <br />
        <TextField
          name="Role"
          floatingLabelText="Emplyee Role"
          hintText="Employee Role"
          value={this.state.Role}
          onChange={e => this.change(e)}
          />
          <br/>
        <TextField
          name="Experience"
          hintText="Experience"
          floatingLabelText="Experience"
          value={this.state.Experience}
          onChange={e => this.change(e)}
        />
        <br />
        <br />
        <RaisedButton label="Submit" onClick={e => this.onSubmit(e)} primary />
      </form>
      </div>
    );
  }
}
