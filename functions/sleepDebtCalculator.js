function getSleepHours(day) {
    if (day === 'monday') {
      return 8
    } else if ( day === 'tuesday') {
      return 9
    } else if ( day === 'wednesday') {
      return 7
    } else if ( day === 'thursday') {
      return 5
    } else if ( day === 'friday') {
      return 6
    } else if ( day === 'saturday') {
      return 7
    } else if ( day === 'sunday') {
      return 10
    }
  }
  
function getActualSleepovers() {
    return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday')
  }
  
function getIdealSleepovers() {
    const idealHours = 8
    return idealHours * 7
  }
  
function calculateSleepDebt() {
    const actualSleepHours = getActualSleepovers()
    const idealSleepHours = getIdealSleepovers()
    if (actualSleepHours === idealSleepHours) {
      console.log('You got a perfect amount of sleep')
    } else if (actualSleepHours > idealSleepHours) {
      console.log(`You got more sleep than needed, you have overslept by ${actualSleepHours-idealSleepHours} hours.`)
    } else if (actualSleepHours < idealSleepHours) {
      console.log(`You should get some more rest, you have underslept by ${actualSleepHours-idealSleepHours} hours`)
    }
  }
  
calculateSleepDebt()