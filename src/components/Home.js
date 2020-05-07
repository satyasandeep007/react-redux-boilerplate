import React, { Component } from "react";
import { connect } from "react-redux";

export class Component2 extends Component {

  increment = () => {
    this.props.dispatch({ type: 'INCREMENT' });
  }

  decrement = () => {
    this.props.dispatch({ type: 'DECREMENT' });
  }

  login = () => {
    this.props.dispatch({ type: 'LOGIN' });
  }

  logout = () => {
    this.props.dispatch({ type: 'LOGOUT' });
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

// const mapDispatchToProps = dispatch => {
//   return { delTask: taskID => dispatch(delTask(taskID)) };
// };

export default connect(mapStateToProps)(Component2);
