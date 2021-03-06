// Heading information on how many chat users

import React, { Component } from 'react';
export default class ChatHeading extends Component {
  render() {
    const { name, online, numberOfUsers } = this.props;
    const onlineText = online ? 'online' : 'offline';
    return (
      <div className="chat-header">
        <div className="user-info">
          <div className="user-name">{name}</div>
          <div className="status">
            <div className={`indicator ${onlineText}`} />
            <span>{numberOfUsers ? numberOfUsers : null} online</span>
          </div>
        </div>
      </div>
    );
  }
}
