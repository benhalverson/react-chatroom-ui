import React, { Component } from 'react';
import io from 'socket.io-client';
const serverURI = process.env.REACT_APP_SERVER || 'localhost:3000';


export default class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      socket: null,
      user: null
    };

    this.setUser = this.setUser.bind(this);
    this.logout = this.logout.bind(this);
    this.reconnectUserInfo = this.reconnectUserInfo.bind(this);
  }

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
  reconnectUserInfo() {
    const { socket, user} = this.state;

    if(this.state.user !== null) {
      // socket.emit(USER_CONNECTED, user);
    }
  }

  /**
   * sets the current user to be logged in.
   * @param user object {id:number, name:string}
   */
  setUser(user) {

  }

  /**
   * set the user to null.
   */
  logout() {

  }
  render() {
    const { user, socket } = this.state;
    return (
      `<div className="container">
        {
          !user ?
           <LoginForm socket={socket} setUser={this.user} verified={this.setuser}/>
           :
          <ChatContainer socket={socket} logout={this.logout} user={user}}
      </div>`
    );
  }
}
