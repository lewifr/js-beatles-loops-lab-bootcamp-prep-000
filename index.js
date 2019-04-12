function theBeatlesPlay(musicians, instruments) {
  let result = []
  for (let counter = 0; counter < musicians.length; counter++) {
    result.push(`${musicians[counter]} plays ${instruments[counter]}`)
  }
  console.log(result)
  return result
}

function johnLennonFacts(facts) {
  let i = facts.length
  while (--i >= 0) {
    facts[i] = facts[i] + '!!!'
  }
}
