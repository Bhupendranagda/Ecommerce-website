import React, { Component } from "react";

export default class Register extends Component {
  state = {
    first: "",
    last: "",
    username: "honey",
    username: "honey",
    password: "honey",
    confirm: "",
  };
  handleChange = (e) => {
    const fields = Object.assign({}, this.state);
    fields[e.target.name] = e.target.value;
    console.log(fields);
    this.setState({
      ...fields,
    });
  };
  render() {
    return (
      <div className="flex justify-center">
        <div className="flex flex-col absolute top-[30%] shadow-lg rounded-lg border-[2px] w-[60%] p-5 mobile:w-[90%]  ">
          <text className="text-2xl">Register</text>
          <div className="mt-3 flex">
            <input
              type="text"
              className="border-[2px] rounded-lg w-[100%] p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200  "
              placeholder="first name"
              value={this.state.first}
              onChange={this.handleChange}
              name="first"
              required
            />
            <input
              type="text"
              className="ml-3 border-[2px] rounded-lg w-[100%] p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200  "
              placeholder="last name"
              value={this.state.last}
              onChange={this.handleChange}
              name="last"
              required
            />
          </div>
          <div className="mt-3 flex">
            <input
              type="text"
              className="border-[2px] rounded-lg w-[100%] p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200  "
              placeholder="username"
              value={this.state.username}
              onChange={this.handleChange}
              name="username"
              required
            />
          </div>
          <div className="mt-3 flex">
            <input
              type="text"
              placeholder="password"
              name="password"
              className="border-[2px] rounded-lg w-[100%] p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200  "
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
            <input
              type="text"
              placeholder="Confirm"
              name="confirm"
              className="ml-3 border-[2px] rounded-lg w-[100%] p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200  "
              value={this.state.confirm}
              onChange={this.handleChange}
              required
            />
          </div>
          <input
            className="btn mt-7 hover:scale-[1.02]"
            type="button"
            value="Register"
          />
        </div>
      </div>
    );
  }
}
