// Write your solution here!

let cats = ["Milo", "Otis", "Garfield"]

//appends a cat to the back of the array

function destructivelyAppendCat(Maggy) {
  cats.push(Maggy);
}

// prepends a cat to the beginning of the cats array


function destructivelyPrependCat(Clint) {
  cats.unshift(Clint);
}

// removes the last cat from the cats array

function destructivelyRemoveLastCat() {
  cats.pop();
}
//removes the first cat from the cats array

function destructivelyRemoveFirstCat() {
  cats.shift();
}

// appends a cat to the cats array and returns a new array, leaving the cats array unchanged

function appendCat(Marlon) {
  return [...cats, Marlon];
}

// prepends a cat to the cats array and returns a new array, leaving the cats array unchanged

function prependCat(Marlon) {
  return [Marlon, ...cats];
}

// removes the last cat in the cats array and returns a new array, leaving the cats array unchanged

function removeLastCat() {
  return cats.slice(0, -1);
}

// removes the first cat from the cats array and returns a new array, leaving the cats array unchanged

function removeFirstCat() {
  return cats.slice(1);
}