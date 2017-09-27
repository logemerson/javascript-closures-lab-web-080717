var bumpCounter = () => {
  let counter = 0

  var addBump = () => {
    counter++
  }
  var getBumps = () => {
    return counter
  }

  return {
    addBump,
    getBumps
  }
}


var createAnimal = animalType => {
  return (function(deadlyDevice) {
    var diabolicalCreation = {
      animalType: `${animalType}`,
      deadlyDevice: `${deadlyDevice}`
    }
    return diabolicalCreation
  })
}

var sharkCreator = createAnimal("Shark")
var sharkWithFrickinLaserbeam = sharkCreator("Laserbeam")
var sharkWithFrickinCannon = sharkCreator("Cannon")
