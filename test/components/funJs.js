
// map, filter, reduce, forEach, find, findIndex, some, every, includes,
// sort, slice, splice, push, pop, shift, unshift, concat, join, indexOf,
// lastIndexOf, flat, flatMap, reverse

// map – Creates a new array by applying a function to each element.

// filter – Returns a new array with elements that pass a test.

// reduce – Reduces array to a single value using a function.

// forEach – Executes a function for each array element (no return).

// find – Returns the first element that matches a condition.

// findIndex – Returns the index of the first matching element.

// some – Checks if at least one element matches a condition.

// every – Checks if all elements match a condition.

// includes – Checks if an array contains a given value.

// sort – Sorts the array in-place based on a comparator.

// slice – Returns a portion of the array without modifying it.

// splice – Adds/removes elements in the array (modifies it).

// push – Adds elements to the end of an array.

// pop – Removes the last element of an array.

// shift – Removes the first element of an array.

// unshift – Adds elements to the beginning of an array.

// concat – Merges two or more arrays into a new one.

// join – Joins all elements into a string with a separator.

// indexOf – Returns the first index of a given value.

// lastIndexOf – Returns the last index of a given value.

// flat – Flattens nested arrays into a single array.

// flatMap – Maps and flattens the result into a new array.

// reverse – Reverses the order of elements in the array.

// Let me know if you'd like code examples for any of them!




// ✅ map – Transform each element
// const nums = [1, 2, 3];
// const squared = nums.map(n => n * n);
// console.log(squared); // [1, 4, 9]
// ✅ filter – Keep elements that match a condition
// const nums = [1, 2, 3, 4];
// const evens = nums.filter(n => n % 2 === 0);
// console.log(evens); // [2, 4]
// ✅ reduce – Accumulate a single result
// const nums = [1, 2, 3, 4];
// const sum = nums.reduce((acc, val) => acc + val, 0);
// console.log(sum); // 10
// ✅ forEach – Loop through each element (no return)
// const fruits = ["apple", "banana"];
// fruits.forEach(fruit => console.log(fruit));
// // apple
// // banana
// ✅ find – First match based on condition
// const nums = [1, 5, 10];
// const found = nums.find(n => n > 4);
// console.log(found); // 5
// ✅ findIndex – Index of first match
// const nums = [1, 5, 10];
// const index = nums.findIndex(n => n > 4);
// console.log(index); // 1
// ✅ some – At least one matches?

// const nums = [1, 3, 5];
// const hasEven = nums.some(n => n % 2 === 0);
// console.log(hasEven);  false
// ✅ every – All must match

// const nums = [2, 4, 6];
// const allEven = nums.every(n => n % 2 === 0);
// console.log(allEven); // true
// ✅ includes – Contains a value?

// const colors = ["red", "blue"];
// console.log(colors.includes("blue")); // true
// ✅ sort – Sort elements (default is lexicographic)

// const nums = [4, 2, 1];
// nums.sort((a, b) => a - b);
// console.log(nums); // [1, 2, 4]
// ✅ slice – Copy a portion

// const arr = [10, 20, 30, 40];
// const sliced = arr.slice(1, 3);
// console.log(sliced); // [20, 30]
// ✅ splice – Insert/remove at position

// const arr = [1, 2, 3];
// arr.splice(1, 1, 9);  // Remove 1 item at index 1, add 9
// console.log(arr); // [1, 9, 3]
// ✅ push – Add to end

// const arr = [1, 2];
// arr.push(3);
// console.log(arr); // [1, 2, 3]
// ✅ pop – Remove from end

// const arr = [1, 2, 3];
// const last = arr.pop();
// console.log(last); // 3
// console.log(arr);  // [1, 2]
// ✅ shift – Remove from start

// const arr = [1, 2, 3];
// const first = arr.shift();
// console.log(first); // 1
// console.log(arr);   // [2, 3]
// ✅ unshift – Add to start

// const arr = [2, 3];
// arr.unshift(1);
// console.log(arr); // [1, 2, 3]
// ✅ concat – Merge arrays

// const a = [1, 2];
// const b = [3, 4];
// const merged = a.concat(b);
// console.log(merged); // [1, 2, 3, 4]
// ✅ join – Join into a string

// const arr = ["a", "b", "c"];
// console.log(arr.join("-")); // "a-b-c"
// ✅ indexOf – First index of a value

// const arr = [1, 2, 3, 2];
// console.log(arr.indexOf(2)); // 1
// ✅ lastIndexOf – Last index of a value

// const arr = [1, 2, 3, 2];
// console.log(arr.lastIndexOf(2)); // 3
// ✅ flat – Flatten nested arrays

// const arr = [1, [2, [3]]];
// console.log(arr.flat(2)); // [1, 2, 3]
// ✅ flatMap – Map + Flatten in one step

// const arr = [1, 2, 3];
// const mapped = arr.flatMap(x => [x, x * 2]);
// console.log(mapped); // [1, 2, 2, 4, 3, 6]
// ✅ reverse – Reverse array in place

// const arr = [1, 2, 3];
// arr.reverse();
// console.log(arr); // [3, 2,