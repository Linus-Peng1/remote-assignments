function delayedResultPromise(n1, n2, delayTime) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(n1 + n2)
    }, delayTime)
  })
}

// using promise
delayedResultPromise(4, 5, 3000).then(result => { console.log(result) })

// using async/await
async function main() {
  try {
    const result = await delayedResultPromise(4, 5, 3000)
    console.log(result)
  } catch (err) {
    console.log(err)
  }
}

main()