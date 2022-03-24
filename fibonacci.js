function fibonacci(num) 
    {    
        if(num==1) {
            return 0; 
        }
        if (num == 2) {
            return 1; 
        }
        let sum =  fibonacci(num - 1) + fibonacci(num - 2); 
        return sum;
    } 
    console.log("Fibonacci(5): "+fibonacci(5)+"<br>"); 
    console.log("Fibonacci(8): "+fibonacci(8)+"<br>");



// program to generate fibonacci series up to a certain number

// take input from the user

// const number = parseInt(prompt('Enter a positive number: '));
// let n1 = 0, n2 = 1, nextTerm;

// console.log('Fibonacci Series:');
// console.log(n1); // print 0
// console.log(n2); // print 1

// nextTerm = n1 + n2;

// while (nextTerm <= number) {

//     // print the next term
//     console.log(nextTerm);

//     n1 = n2;
//     n2 = nextTerm;
//     nextTerm = n1 + n2;
// }