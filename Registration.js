import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  SubmitRegister() {
    console.warn("state", this.state);
  }
  render() {
    return (
      <>
        <form>
          <div className="p-lg-3">
            <lable htmlfor="username">UserName</lable>
            <input
              className="input-group col-4"
              type="text"
              onChange={(e) => {
                this.setState({ email: e.target.value });
              }}
            />
            <br />
            <br />
            <lable htmlfor="password">Password</lable>
            <input
              type="text"
              className="input-group col-4 "
              onChange={(e) => {
                this.setState({ password: e.target.value });
              }}
            />
          </div>
          <button
            className="btn btn-dark "
            onClick={this.SubmitRegister.bind(this)}
          >
            {" "}
            Login
          </button>
        </form>
      </>
    );
  }
}

export default Login;
