/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */
// var temp = 0;
// function sleep (seconds) {
//     let x = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("hhh")
//         }, seconds*1000)
//     })
// }
// sleep(5)
// console.log("cccc");

function sleep(milliseconds) {
    return new Promise((resolve) => {
      setTimeout(resolve, milliseconds);
    });
  }
  
  function main() {
    console.log("Start of the function");
  
    sleep(3000)
      .then(() => {
        console.log("End of the function after 3 seconds");
      })
      .catch((error) => {
        console.error("Error occurred: " + error);
      });
  }
  
  main();

sleep(4000);
console.log("hhh")