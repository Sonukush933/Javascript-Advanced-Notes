// 1. Asynchronous JavaScript (async/await)

async function fetchData() {
    try {
        const data = await new Promise((resolve, reject) => setTimeout(() => reject("Error occurred"), 2000));
        console.log(data);
    } catch (error) {
        console.error(error);  // Output: "Error occurred"
    }
}
fetchData();


function fetchData(message){
    return new Promise(function(resolve, reject){
      setTimeout(function(){
        resolve("Data received first")
      }, 2000);
    })
 }
 function fetchData1(message){
    return new Promise(function(resolve, reject){
      setTimeout(function(){
        resolve("Data received second")
      }, 2000);
    })
 }
 function fetchData2(message){
    return new Promise(function(resolve, reject){
      setTimeout(function(){
        resolve("Data received third")
      }, 2000);
      setTimeout(function(){
        console.log( "All step completed");
      }, 4000);
      
    })
 }
 
 async function processSteps() {
    const step1Result = await fetchData();
    console.log(step1Result);  

    const step2Result = await fetchData1();
    console.log(step2Result); 

    const step3Result = await fetchData2();
    console.log(step3Result); 
}
processSteps();
