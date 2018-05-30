// 

import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class SideBar extends Component {
  render() {
    const { chats, activeChat, user, setActiveChat, logout} = this.props
    return (
      <div id="side-bar">
        <div className="heading">
          <div className="app-name">Reactn</div>
          <div className="menu">
          Menu
          </div>
        </div>
        <div className="search">
          <i className="search-icon"></i>
          <input placeholder="Search" type="text"/>
          <div className="plus"></div>
        </div>
        <div
          className="users"
          ref='users'
          onClick={e => {
            e.target === this.refs.user && setActiveChat(null);
          }}>

          {
            chats.map(chat => {
              if(chat.name) {
                const lastMessage = chat.messages[chat.messages.length - 1];
                const user = chat.users.find(({name}) => name !== this.props.name) || { name: '' };
                const classNames = activeChat && activeChat.id === chat.id ? 'active' : '';
                return (
                  <div
                    key={chat.id}
                    className={`user ${classNames}`}
                    onClick={ () => {
                      setActiveChat(chat);
                    } }
                  >
                    <div className="user-info">
                      <div className="name">{user.name}</div>
                      {lastMessage && <div className="last-message">{lastMessage.message}</div>}
                    </div>

                  </div>
                );
              }

              return null;
            })
          }

        </div>
        <div className="current-user">
          <span>{user.name}</span>
          <div onClick={() => {
            logout();
          }} title="Logout" className="logout">
            Logout
          </div>
        </div>
      </div>
    );
  }
}

SideBar.propTypes = {
  chats: PropTypes.array.isRequired,
  activeChat: PropTypes.function,
  user: PropTypes.string.isRequired,
  setActiveChat: PropTypes.function,
  logout: PropTypes.string.isRequired
}