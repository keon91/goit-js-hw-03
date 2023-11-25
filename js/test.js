let start = 10
let end = 20
let divisor = 5
function findNumber(start, end, divisor) {
    for (let i = start; i <= end; i++) {
    if(i % divisor === 0) {
      return i;
    }   
  }  
} 
let result = findNumber(start, end, divisor);
console.log(result);

