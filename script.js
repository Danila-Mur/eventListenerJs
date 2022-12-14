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
};

const changeBackground = () => {
  square.style.backgroundColor = `${inputText.value}`;

  inputText.value = '';
};

insideBtn.style.display = 'none';

loadContent();

btnClick.addEventListener('click', changeBackground);
inputRange.addEventListener('input', loadContent);
