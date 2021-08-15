const xhr = new XMLHttpRequest()

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    const message = xhr.responseText
    document.querySelector('.ajaxResponse').innerHTML = `<p>${message}</p>`
  }
}

function sendAjax() {
  const input = document.getElementById('numberInput')
  const number = input.value
  xhr.open('GET', `http://localhost:3000/data?number=${number}`)
  xhr.send()
}