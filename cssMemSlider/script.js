const slides = document.querySelectorAll('.picture'),
  slideContainer = document.querySelector('.slider'),
  buttons = document.querySelectorAll('.button'),
  buttonDiv = document.querySelectorAll('.button-div'),
  texts = document.querySelectorAll('.text');



const activeButton = n => {

  for (let button of buttonDiv) {
    button.classList.remove('active');
  }

  for (let text of texts) {
    text.classList.remove('active');
  }

  for (let slide of slides) {
    slide.classList.remove('active');
  }

  texts[n].classList.add('active');
  buttonDiv[n].classList.add('active');
  slides[n].classList.add('active');
};

buttons.forEach((button, i) => {
  button.addEventListener('mousedown', (event) => {
    activeButton(i);
  });
});

buttons.forEach((button, i) => {
  button.addEventListener('mouseover', (event) => {
    if (buttonDiv[i] == document.querySelector('.button-div.active')) {

      buttonDiv[i].classList.add('active-border');
    } else {
      buttonDiv[i].classList.add('active-mouse');
    }

  });
});

buttons.forEach((button, i) => {
  button.addEventListener('mouseout', (event) => {
    buttonDiv[i].classList.remove('active-mouse');
    buttonDiv[i].classList.remove('active-border');

  });
});