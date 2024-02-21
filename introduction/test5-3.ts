function sumNumbers(...numbers: number[]): number {
    let sum = 0;
    for (const num of numbers) {
        sum += num;
    }
    return sum;
}

const result1 = sumNumbers(1, 2, 3, 4, 5);
const result2 = sumNumbers(10, 20);

console.log(result1);
console.log(result2);
