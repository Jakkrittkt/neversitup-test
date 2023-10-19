const validateEyes = (str) => {
  if (str === ":" || str === ";") return true
  return false
}
const validateMount = (str) => {
  if (str === ")" || str === "D") return true
  return false
}
const validateNose = (str) => {
  if (str === "-" || str === "~" || str === "") return true
  return false
}

const countSmileys = (arr) => {
  let count = 0

  arr.forEach(face => {
    if (face.length === 2 && validateEyes(face[0]) && validateMount(face[1])) {
      count++
    } else if (face.length === 3 && validateEyes(face[0]) && validateNose(face[1]) && validateMount(face[2])) {
      count++
    }
  });
  return count
}

module.exports = { validateEyes, validateMount, validateNose, countSmileys }
