// Print first 10 digits of Fibonacci sequence

let a = 0, b = 1, third;
function fibonacci(iter) {
    for (let i = 1; i <= iter; i++) {
    console.log(a);
    third = a + b;
    a = b;
    b = third;
    }
}

fibonacci(10);