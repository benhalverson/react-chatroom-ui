import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SideBar from './SideBar';
import UtilityMethods from '../../Classes';
import Messages from '../messaging/Messages';
import MessageInput from '../messaging/MessageInput';
import ChatHeading from './ChatHeading';
import { COMMUNITY_CHAT, MESSAGE_RECIEVED, MESSAGE_SENT, TYPING } from '../../Constants';

export default class ChatContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeChat: null,
      communityChat: null,
      chats: []
    };
  }
  render() {
    return <div>Ready to chat</div>;
  }
}
