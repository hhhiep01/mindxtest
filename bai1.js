
l = prompt("Enter a ");
r = prompt("Enter b: ");

function checkPrime(numberToCheck) {
    if (numberToCheck == 1) {
        return false;
    }
    for (let i = 2; i * i <= numberToCheck; i++) {
        if (numberToCheck % i == 0) {
            return false;
        }
    }
    return true;
}

function primeSum(l, r) {
    let sum = 0;
    for (let i = r; i >= l; i--) {

        // Check for prime
        let isPrime = checkPrime(i);
        if (isPrime) {


            sum = sum + i;
        }
    }
    return sum;
}


document.write(primeSum(l, r));