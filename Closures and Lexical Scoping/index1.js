//This is Lexical Scope

let outerVar = 'I am outside!';

function outerFunction() {
  let innerVar = 'I am inside!';

  function innerFunction() {
    console.log(outerVar); // Can access outer scope
    console.log(innerVar); // Can access own scope
  }

   innerFunction();
}

 outerFunction();
 console.log(outerVar);
 
//  The function (innerFunction) is called directly and can only access the variables within the scope that are available at the time of execution.
//  After the function executes, the scope of those variables ends.