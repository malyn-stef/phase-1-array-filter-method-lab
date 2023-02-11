function findMatching(array, str) {
  return array.filter(function (testName) {
    return testName.toLowerCase() == str.toLowerCase()



  })
}

function fuzzyMatch(array, str) {
  return array.filter(function (returnThing) {
    return returnThing.startsWith(str)
  })
}

function matchName(array, str) {
  return array.filter(function (returnThing) {
    return returnThing["name"] === str
  }

  )

}