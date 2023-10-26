function avg(numbers) {
    let s = 0;
    for (let i = 0; i < numbers.length; i++) {
        s += numbers[i];
    }
    return s / numbers.length;
}

function prime(number) {
    for (let i = 2; i * i <= number; i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}

function fact(number) {
    let a = 1;
    for (let i = 2; i <= number; i++) {
        a *= i;
    }
    return a;
}

exports.avg = avg;
exports.prime = prime;
exports.fact = fact;