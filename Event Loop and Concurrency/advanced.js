// console.log('1: Start');

// setTimeout(() => {
//   console.log('2: Timeout 1');
// }, 0);

// setImmediate(() => {
//   console.log('3: Immediate');
// });

// Promise.resolve()
//   .then(() => {
//     console.log('4: Promise 1');
//   })
//   .then(() => {
//     console.log('5: Promise 2');
//   });

// process.nextTick(() => {
//   console.log('6: Next Tick');
// });

// console.log('7: End');

console.log('A'); // Synchronous

setTimeout(() => {
  console.log('B'); // Macrotask (setTimeout)
}, 0);

Promise.resolve().then(() => {
  console.log('C'); // Microtask (Promise)
});

console.log('D'); // Synchronous
