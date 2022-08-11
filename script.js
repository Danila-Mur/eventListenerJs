const btnClick = document.querySelector('#btn'),
  inputText = document.querySelector('input[type=text]'),
  inputRange = document.querySelector('input[type=range]'),
  spanRange = document.querySelector('#range-span'),
  square = document.querySelector('#square'),
  circle = document.querySelector('#circle'),
  insideBtn = document.querySelector('#e_btn');

btnClick.addEventListener('click', (e) => {
  e.preventDefault();

  square.style.backgroundColor = `${inputText.value}`;

  inputText.value = '';
});

console.log(insideBtn.style);

insideBtn.style.display = 'none';

inputRange.addEventListener('input', (e) => {
  spanRange.textContent = e.target.value + ' %';

  circle.style.width = `${e.target.value}%`
  circle.style.height = `${e.target.value}%`
})