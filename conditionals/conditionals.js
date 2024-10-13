let raceNumber = Math.floor(Math.random() * 1000);
let registerEarly = true;
let runnerAge = 23;

if (runnerAge >= 18 && registerEarly === true) {
  raceNumber += 1000;
}

if (runnerAge > 18 && registerEarly === true ) {
  console.log(`${raceNumber} will race at 09:30 am`);
} else if (runnerAge > 18 && registerEarly === false) {
  console.log(`${raceNumber} will race at 11:00 am`);
} else if (runnerAge < 18) {
  console.log(`${raceNumber} will race at 12:30pm`);
} else if (runnerAge === 18 && registerEarly === 18 ) {
  console.log(`you should see the registeration desk`);
} else {
  console.log(`you should see the registeration desk`);
}