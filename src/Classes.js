import uuidv4 from 'uuid';

export default class UtilityMethods {
  createUser({uuid = uuidv4(), name}) {
    return { uuid, name};
  }

  createMessage({message, sender}) {
    return {
      id: uuidv4(),
      time: this.getTime(new Date(Date.now())),
      message,
      sender
    };
  }

  createChat({messages = [], name = 'ASAPP Chat', users = []}) {
    return {
      id: uuidv4(),
      name,
      messages,
      users,
      typingUsers: [],
      addMessage: (messages, message) => [...messages, message],
      addTypingUser: (typingUsers, username) => [...typingUsers, username],
      removeTypingUser: (typingUsers, username) => typingUsers.filter(user => user === username)
    };
  }
  getTime(date) {
    return `${date.getHours()}:${`0${date.getMinutes()}`.slice(-2)}`;
  }
}
