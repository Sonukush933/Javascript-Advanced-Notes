//This is Closure function

function main() {
  let count = 0;
  function child() {
    count++;
    console.log(count);
  }
  return child;
}

const parent = main();
parent();
parent();


// The function (child) is returned and called later, which preserves the scope of the outer function (main) even after it has finished executing.
// Due to the closure, the count variable can be accessed and modified even outside the function.
