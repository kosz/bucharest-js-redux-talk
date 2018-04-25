let array = [ 1, 2, 3 ];

// this operation mutates the array
array.push(4);

// this is an immutable operation which
// creates a new array leaving the old one intact

let new_array = [ ...array, 5 ];


console.log(array);
console.log(new_array);
