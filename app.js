function fibonacci(num) {
    if (num < 2) {
        return 1;
    }

    return fibonacci(num - 1) + fibonacci(num - 2);
}

let num = prompt("What number do you want to find the fibonacci of?");
document.write(fibonacci(num));