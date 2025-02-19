const letterValueOne = ['a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't']
const letterValueTwo = ['d', 'g']
const letterValueThree = ['b', 'c', 'm', 'p']
const letterValueFour = ['f', 'h', 'v', 'w', 'y']
const letterValueFive = ['k']
const letterValueEight = ['j', 'x']
const letterValueTen = ['q', 'z']

function scrabble(word) {
  let total = 0
  if (word === '' || word === ' \t\n' || word === null) {
    return 0
  }
  const lowerCaseWord = word.toLowerCase()
  for (let i = 0; i < lowerCaseWord.length; i++) {
    if (onePointLetter(lowerCaseWord[i])) {
      total += 1
    } else if (twoPointLetter(lowerCaseWord[i])) {
      total += 2
    } else if (threePointLetter(lowerCaseWord[i])) {
      total += 3
    } else if (fourPointLetter(lowerCaseWord[i])) {
      total += 4
    } else if (fivePointLetter(lowerCaseWord[i])) {
      total += 5
    } else if (eightPointLetter(lowerCaseWord[i])) {
      total += 8
    } else if (tenPointLetter(lowerCaseWord[i])) {
      total += 10
    } else if (doublePoints(lowerCaseWord[i])) {
      total *= 2
    } else if (triplePoints(lowerCaseWord[i])) {
      total *= 3
    }
  }
  return total
}

function onePointLetter(character) {
  let result = false
  for (let i = 0; i < letterValueOne.length; i++) {
    const pointCharacter = letterValueOne[i]
    if (character === pointCharacter) {
      result = true
    }
  }
  return result
}

function twoPointLetter(character) {
  let result = false
  for (let i = 0; i < letterValueTwo.length; i++) {
    const pointCharacter = letterValueTwo[i]
    if (character === pointCharacter) {
      result = true
    }
  }
  return result
}

function threePointLetter(character) {
  let result = false
  for (let i = 0; i < letterValueThree.length; i++) {
    const pointCharacter = letterValueThree[i]
    if (character === pointCharacter) {
      result = true
    }
  }
  return result
}

function fourPointLetter(character) {
  let result = false
  for (let i = 0; i < letterValueFour.length; i++) {
    const pointCharacter = letterValueFour[i]
    if (character === pointCharacter) {
      result = true
    }
  }
  return result
}

function fivePointLetter(character) {
  let result = false
  for (let i = 0; i < letterValueFive.length; i++) {
    const pointCharacter = letterValueFive[i]
    if (character === pointCharacter) {
      result = true
    }
  }
  return result
}

function eightPointLetter(character) {
  let result = false
  for (let i = 0; i < letterValueEight.length; i++) {
    const pointCharacter = letterValueEight[i]
    if (character === pointCharacter) {
      result = true
    }
  }
  return result
}

function tenPointLetter(character) {
  let result = false
  for (let i = 0; i < letterValueTen.length; i++) {
    const pointCharacter = letterValueTen[i]
    if (character === pointCharacter) {
      result = true
    }
  }
  return result
}

function doublePoints(character) {
  const symbol1 = `{`
  const symbol2 = `}`
  let result = false
  if (character === symbol1 && symbol2) {
    result = true
  }
  return result
}

function triplePoints(character) {
  const symbol1 = `[`
  const symbol2 = `]`
  let result = false
  if (character === symbol1 && symbol2) {
    result = true
  }
  return result
}

module.exports = scrabble
