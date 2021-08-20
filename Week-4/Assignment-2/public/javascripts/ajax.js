const xhr = new XMLHttpRequest()

function ajax(src, callback) {
  //callback = render(response)
  xhr.open('get', src)
  xhr.onreadystatechange = () => {
    const data = JSON.parse(xhr.responseText)
    callback(data)
  }
  xhr.send()
}

function render(data) {
  const products = data

  let htmlContent = '<ul calss="items">'
  for (let i = 0; i < products.length; i++) {
    htmlContent += `<li class="item">${products[i].name}`
    htmlContent += `<p>Price: ${products[i].price}</p>`
    htmlContent += `<p>Description: ${products[i].description}</p>`
    htmlContent += '</li>'
  }
  htmlContent += '</ul>'

  document.querySelector('.container').innerHTML = htmlContent
}

ajax("http://13.230.176.178:4000/api/1.0/remote-w4-data", function (response) {
  render(response)
})


// const xhr = new XMLHttpRequest()
// xhr.onreadystatechange = function () {
// if (xhr.readyState === 4) {
// const products = JSON.parse(xhr.responseText)
// let htmlContent = '<ul calss="items">'
// for (let i = 0; i < products.length; i++) {
//   htmlContent += `<li class="item">${products[i].name}`
//   htmlContent += `<p>Price: ${products[i].price}</p>`
//   htmlContent += `<p>Description: ${products[i].description}</p>`
//   htmlContent += '</li>'
// }
// htmlContent += '</ul>'
// document.querySelector('.container').innerHTML = htmlContent
// }
// }

// xhr.open('get', 'http://13.230.176.178:4000/api/1.0/remote-w4-data')
// xhr.send()