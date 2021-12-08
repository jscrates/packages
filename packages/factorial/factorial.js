// import * from bodmas 
export default function factorial() {
    const num = parseInt(prompt('Enter a positive integer(negetive factorial does not exists)!'));
    if(num < 0){
        console.log('Error! Negetive factorial does not exists.');
    }
    else if(num === 0){
        console.log(`Factorial of ${num} is 1.`);
    }
    else{
        let fact = 1;
        for(i=0;i<=num;i++){
            fact =mul(fact,i);
        }
        console.log(`The factorial of ${num} is ${fact}.`);
    }
}