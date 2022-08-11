const btnClick = document.querySelector('#btn'),
  inputText = document.querySelector('input[type=text]'),
  inputRange = document.querySelector('input[type=range]'),
  spanRange = document.querySelector('#range-span'),
  square = document.querySelector('#square'),
  circle = document.querySelector('#circle'),
  insideBtn = document.querySelector('#e_btn');

const loadContent = () => {
  spanRange.textContent = inputRange.value + ' %';

  circle.style.width = `${inputRange.value}%`;
  circle.style.height = `${inputRange.value}%`;
}

const changeBackground = () => {
  square.style.backgroundColor = `${inputText.value}`;

  inputText.value = '';
};

const changeSize = (e) => {
  spanRange.textContent = e.target.value + ' %';

  circle.style.width = `${e.target.value}%`;
  circle.style.height = `${e.target.value}%`;
};

insideBtn.style.display = 'none';

window.addEventListener('DOMContentLoaded', loadContent)
btnClick.addEventListener('click', changeBackground);
inputRange.addEventListener('input', changeSize);
