const btnClick = document.querySelector('#btn'),
  inputText = document.querySelector('input[type=text]'),
  inputRange = document.querySelector('input[type=range]'),
  spanRange = document.querySelector('#range-span'),
  square = document.querySelector('#square'),
  insideBtn = document.querySelector('#e_btn');

btnClick.addEventListener('click', (e) => {
  e.preventDefault();

  square.style.backgroundColor = `${inputText.value}`;

  inputText.value = '';
});

insideBtn.style.display = 'none';

inputRange.addEventListener('input', (e) => {
  spanRange.textContent = e.target.value + ' %';

  square.style.width = `${e.target.value}%`
  square.style.height = `${e.target.value}%`
})