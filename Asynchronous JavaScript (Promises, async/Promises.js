// 1. Asynchronous JavaScript (Promises)




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
     }, 3000);
     
   })
}

fetchData()
.then(function(data){
    console.log(data);
    return fetchData1()
})
.then(function(data){
    console.log(data);
    return fetchData2()
})
.then(function(data){
    console.log(data);
})



