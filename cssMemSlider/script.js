const slides = document.querySelectorAll('.picture'),
  slideContainer = document.querySelector('.slider'),
  buttons = document.querySelectorAll('.button'),
  buttonDiv = document.querySelectorAll('.button-div'),
  texts = document.querySelectorAll('.text'),
  cursorEffect = document.querySelector('.cursor-effect'),
  main = document.querySelector('.main');



const activeSlider = n => {

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
  button.addEventListener('mouseup', e => {
    activeSlider(i);
  });
});
main.addEventListener('mousedown', () => {

});