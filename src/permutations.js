const permutations = (str) => {
  const inputValid = validate(str)
  if (!inputValid) return false

  let result = reArrange(str, 0, str.length)
  result = deleteDuplicate(result)

  return result
}

const validate = (input) => {
  if (!input || typeof input != "string") {
    return false
  }
  return true
}

function swap(str, step, size) {
  let result = []
  let next = step
  const _temp = str.split("")
  while (next < size) {
    const swap = [..._temp]
    const nextStr = swap[next]
    swap[next] = swap[step]
    swap[step] = nextStr
    result.push(swap.join(""))
    next++
  }

  return result
}

const reArrange = (str, step, size) => {
  if (size === 1) {
    return [str]
  }

  const results = []
  const swapResult = swap(str, step, size)

  if (step === size - 2) {
    return swapResult
  }

  step++
  for (let i = 0; i < swapResult.length; i++) {
    const remain = reArrange(swapResult[i], step, size)
    results.push(...remain)
  }

  return results

}

const deleteDuplicate = (arr) => arr.filter((item, index) => arr.indexOf(item) === index)

module.exports = { permutations, deleteDuplicate, validate, reArrange }



