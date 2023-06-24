import React from "react";
class AddContact extends React.Component {
  //using states in class component
  state = {
    firstname: "",
    email: "",
  };
  add = (e) => {
    e.preventDefault();
    if (this.state.firstname === "" || this.state.email === "") {
      alert("All the fields must be filled");
      return;
    }
    //this displays the states value after they are submitted
    console.log(this.state);

    //this works but we need to pass this to App.js to be printed on the list
    this.props.addContactHandler(this.state);
    //here the props are passed as function

    //but after sumbission the fields are not cleared so we use
    this.setState({ firstname: "", email: "" });
  };
  render() {
    return (
      <div className="ui main">
        <h2 style={{ marginTop: "20px" }}>Add Contact</h2>
        {/* we created add funcn to check before submission */}
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="firstname"
              placeholder="Name"
              //the states are used here
              value={this.state.firstname}
              onChange={(e) => this.setState({ firstname: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
