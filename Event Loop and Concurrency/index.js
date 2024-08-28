console.log('1: Start'); // Step 1

setTimeout(() => {
  console.log('2: Timeout'); // Step 4
},2000);

Promise.resolve().then(() => {
  console.log('3: Promise'); // Step 3
});

console.log('4: End'); // Step 2
