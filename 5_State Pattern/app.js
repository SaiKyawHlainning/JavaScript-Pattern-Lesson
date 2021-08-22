const PageState = function () {
  let currentState = new homeState(this);

  this.init = function () {
    this.change(new homeState());
  };

  this.change = function (state) {
    currentState = state;
  };
};

// Home State
const homeState = function (page) {
  document.getElementById(
    'heading'
  ).innerHTML = `<h1>State Pattern Lesson</h1>`;
  document.getElementById('content').innerHTML = `
    <p>We are learning state pattern in JavaScript courses.</p>
  `;
};

// About State
const aboutState = function (page) {
  document.getElementById('heading').innerHTML = `<h1>About Us</h1>`;
  document.getElementById('content').innerHTML = `
    <p>This is about page.</p>
  `;
};

// Home State
const contactState = function (page) {
  document.getElementById('heading').innerHTML = `<h1>Contact Us</h1>`;
  document.getElementById('content').innerHTML = `
    <form>
      <div class='form-group'>
        <label>Name</label>
        <input type='text'>
      </div>
      <div class='form-group'>
        <label>Email</label>
        <input type='email'>
      </div>
      <a herf='#' type='submit' class='btn'>Submit</a>
    </form>
  `;
};

const page = new PageState();
page.init();

// Event Listener
document.getElementById('home').addEventListener('click', function () {
  page.change(new homeState());
});
document.getElementById('about').addEventListener('click', function () {
  page.change(new aboutState());
});
document.getElementById('contact').addEventListener('click', function () {
  page.change(new contactState());
});
