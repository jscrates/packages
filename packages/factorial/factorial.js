// import * from bodmas 
module.exports = function factorial(num) {
    if(num < 0){
        console.log('Error! Negetive factorial does not exists.');
    }
    else if(num === 0){
        return (`Factorial of ${num} is 1.`);
    }
    else{
        let fact = 1;
        for(i=0;i<=num;i++){
            fact =mul(fact,i);
        }
        return (`The factorial of ${num} is ${fact}.`);        
    }
    
}