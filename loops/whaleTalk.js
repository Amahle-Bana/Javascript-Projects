const input = 'turpentine and turtles';
let vowels = ['a','e','i','o','u'];

resultArray = [];

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      resultArray.push(input[i]);
      if (input[i] === 'e') {
        resultArray.push(input[i]);
      }
      if (input[i] === 'u') {
        resultArray.push(input[i]);
      }
    }
  }
  resultString = resultArray.join('');
}

console.log(resultString);