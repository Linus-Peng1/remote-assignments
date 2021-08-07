function count(input) {
  let object = {}
  input.forEach(character => {
    if (object[character]) {
      object[character] += 1
    } else {
      object[character] = 1
    }
  })
  return object
}

let input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'x'];
console.log(count(input1));
// should print {a:3, b:1, c:2, x:1}

function groupByKey(input) {
  let object = {}
  input.forEach(character => {
    if (object[character['key']]) {
      object[character['key']] += character['value']
    } else {
      object[character['key']] = character['value']
    }
  })
  return object
}

let input2 = [
  { key: 'a', value: 3 },
  { key: 'b', value: 1 },
  { key: 'c', value: 2 },
  { key: 'a', value: 3 },
  { key: 'c', value: 5 }
]
console.log(groupByKey(input2));
// should print {a:6, b:1, c:7}