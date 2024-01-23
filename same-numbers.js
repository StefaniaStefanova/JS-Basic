function solve(num) {
    let totalSum = 0;
    let allSame = true;
    const firstDigit = num % 10;

    while (num > 0) {
        const current = num % 10;

        if (firstDigit !== current) {
            allSame = false;
        }

        totalSum += current;
        num = Math.floor(num / 10);
    }

    console.log(allSame);
    console.log(totalSum);
}

// Example usage:
solve(11111);
