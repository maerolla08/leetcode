var isPrime = function(n) {
    var result = true;
    
    if (n <= 1) {
        result = false;
    }
    else {
        // We only need to check up to the sqrt of the number.
        for (var i=2; i*i<=n; i++) {
            if (n % i === 0) {
                // This number is evenly divisible by i, so it is not prime.
                result = false;
                break;
            }
        }
    }
    
    return result;
}

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    var result = 0;
    
    for (var i=0; i<n; i++) {
        if (isPrime(i)) {
            result++;
        }
    }
    
    return result;
};