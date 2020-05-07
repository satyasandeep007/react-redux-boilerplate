import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement, login, logout } from "../redux/actions/actions";

export class Component2 extends Component {

  increment = () => {
    this.props.increment();
  }

  decrement = () => {
    this.props.decrement();
  }

  login = () => {
    this.props.login();
  }

  logout = () => {
    this.props.logout();
  }

  render() {
    return (
      <div>
        <div>
          <h6>Count </h6>
          <button onClick={this.decrement}>-</button>
          {this.props.count}
          <button onClick={this.increment}>+</button>
        </div>
        <div>
          <h6>logged </h6>
          <button onClick={this.login}>Login</button>
          {this.props.logged}
          <button onClick={this.logout}>Logout</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state.tasks.count,
  logged: state.logger.isLoggedIn
});

const mapDispatchToProps = dispatch => {
  return {
    increment: count => dispatch(increment(count)),
    decrement: count => dispatch(decrement(count)),
    login: logged => dispatch(login(logged)),
    logout: logged => dispatch(logout(logged))
  };
};

export default connect(mapStateToProps
  , mapDispatchToProps
)(Component2);
