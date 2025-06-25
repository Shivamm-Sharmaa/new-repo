function getRandomInt(min, max) {
  // Ensure min is an integer by rounding up
  min = Math.ceil(min);
  // Ensure max is an integer by rounding down
  max = Math.floor(max);
  // Generate a random integer within the specified range (inclusive)
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage: Generate a random integer between 1 and 100
let randomNumber = getRandomInt(1, 100);
console.log(`Generated random number: ${randomNumber}`);

// Example usage: Generate a random integer between 50 and 75
let anotherRandomNumber = getRandomInt(50, 75);
console.log(`Generated another random number: ${anotherRandomNumber}`);