// General Layout Component

import React, { Component } from 'react';
import io from 'socket.io-client';
import LoginForm from './LoginForm';
import ChatContainer from './chat/ChatContainer';
import { USER_CONNECTED, LOGOUT } from '../Constants';

const serverURI = `${process.env.REACT_APP_API_URL}`;

export default class Layout extends Component {
  state = {
    socket: null,
    user: null
  };

  componentWillMount() {
    let socket = io(serverURI);
    this.setState({ socket });
    this.initSocket(socket);
  }

  /**
   * Initalizes socket event callbacks
   */
  initSocket(socket) {
    socket.on('connect', value => {
      console.log('connected', value);
    });
    socket.on('disconnect', this.reconnectUserInfo);
  }

  /**
   * Connects user info back to the server.
   * If the username is already logged in.
   */
  reconnectUserInfo = () => {
    // const { socket, user} = this.state;

    if (this.state.user !== null) {
      // socket.emit(USER_CONNECTED, user);
    }
  };

  /**
   * sets the current user to be logged in.
   * @param user object {id:number, name:string}
   */
  setUser = user => {
    const { socket } = this.state;
    this.setState({ user });
    socket.emit(USER_CONNECTED, user);
  };

  /**
   * set the user to null.
   */
  logout = () => {
    const { socket } = this.state;
    socket.emit(LOGOUT);
    this.setState({ user: null });
  };
  render() {
    const { user, socket } = this.state;
    return (
      <div className="container">
        {!user ? (
          <LoginForm
            socket={socket}
            setUser={this.setUser}
            verified={this.setUser}
          />
        ) : (
          <ChatContainer socket={socket} logout={this.logout} user={user} />
        )}
      </div>
    );
  }
}
