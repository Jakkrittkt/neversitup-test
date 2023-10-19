const validate = (input) => input.every(element => typeof element === 'number');

const findTheOddInt = (array) => {
  const mapCount = new Map()
  let result = 0

  array.forEach(value => {
    if (mapCount.has(value)) {
      mapCount.set(value, mapCount.get(value) + 1)
    } else {
      mapCount.set(value, 1);
    }
  })

  for (let [key, value] of mapCount) {
    if (value % 2 !== 0) {
      result = key
      break;
    }
  }
  return result
}

module.exports = { validate, findTheOddInt }
findTheOddInt([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])
