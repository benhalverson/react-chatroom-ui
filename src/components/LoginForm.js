import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { VERIFY_USER } from '../Constants';


export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: 'Enter a nickname',
      error: ''};
  }
  componentDidMount = () => {
    this.focus();
  }

  handleChange = event => {
    this.setState({ nickname: event.target.value});
  }

  handleSubmit = event => {
    event.preventDefault();
    const {socket} = this.props;
    const {nickname} = this.state;
    socket.emit(VERIFY_USER, nickname, this.setUser);
  }
  setUser = response => {
    if(!response.isUser) {
      this.props.setUser(response.user);
    } else {
      this.setError('User name is taken');
    }
  }

  focus() {
    this.textInput.focus();
  }
  render() {
    const {nickname, error } = this.state;
    return (
      <div className='login'>
        <form onSubmit={this.handleSubmit} className='login-form'>
          <label htmlFor='nickname'>
            <h1 style={{textAlign: 'center'}}>Got a nickname?</h1>
          </label>
          <input type='text' ref={input => {
            this.textInput = input;
          }} id='nickname' value={nickname} onChange={this.handleChange} />
        </form>
        <div className="error">{error ? error : ''}</div>
      </div>
    );
  }
}
LoginForm.propTypes = {
  socket: PropTypes.object,
  verified: PropTypes.func.isRequired
};
