class User {
  constructor(name) {
    this.name = name;
    this.chatroom = null;
  }

  send(message, to) {
    this.chatroom.send(message, this, to);
  }

  recieve(message, from) {
    console.log(`${from.name} to ${this.name}: ${message}`);
  }
}

const Chatroom = function () {
  let users = {};

  return {
    register(user) {
      users[user.name] = user;
      user.chatroom = this;
    },
    send(message, from, to) {
      if (to) {
        to.recieve(message, from);
      } else {
        for (key in users) {
          if (users[key] !== from) users[key].recieve(message, from);
        }
      }
    },
  };
};

const steven = new User('Steven');
const john = new User('John');
const sara = new User('Sara');
const willams = new User('Willams');

const chatroom = new Chatroom();

chatroom.register(steven);
chatroom.register(john);
chatroom.register(sara);
chatroom.register(willams);

// steven.send('Hello John!', john);
steven.send('Hello Everyone!');
