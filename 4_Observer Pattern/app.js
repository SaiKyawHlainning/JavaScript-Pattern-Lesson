class EventObserver {
  constructor() {
    this.observers = [];
  }

  start(fun) {
    this.observers.push(fun);
    console.log(`Now, you started to count second!`);
  }

  stop(fun) {
    this.observers = this.observers.filter(function (item) {
      if (item !== fun) {
        return item;
      }
    });
  }

  readyGo() {
    this.observers.forEach(function (item) {
      item.call();
    });
  }
}

const click = new EventObserver();

const getCountSeconds = function () {
  console.log(`Current Seconds: ${new Date().getSeconds()}`);
};

// Eventlistener
document.getElementById('start').addEventListener('click', function () {
  click.start(getCountSeconds);
});
document.getElementById('stop').addEventListener('click', function () {
  click.stop(getCountSeconds);
});
document.getElementById('readyGo').addEventListener('click', function () {
  click.readyGo();
});
