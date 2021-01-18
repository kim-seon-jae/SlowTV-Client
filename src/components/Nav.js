import React, { Component } from "react";

class Nav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="navbar">
        <nav>
          <ul>
            <li>slowTV</li>
            {/* 모달로 열려야함. */}
            <li>
              <div>Register</div>
            </li>
            <li>
              {/* 로그인상태에 따라서?<div>Logout</div> */}
              <div>Login</div>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
