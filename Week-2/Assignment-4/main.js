const banner = document.querySelector('.banner')
const headline = document.querySelector('.headline')
const button = document.querySelector('.button')
const hiddenContent = document.querySelector('.hidden-content')

banner.addEventListener('click', function changeContent() {
  headline.textContent = 'Have a Good Time!'
})

button.addEventListener('click', function showHidden() {
  if (hiddenContent.style.display === 'none') {
    hiddenContent.style.display = 'block'
  }
})