// Algorithm: Area of a Triangle

// 1. Input:
//    * base: the length of the base of the triangle.
//    * height: the height of the triangle perpendicular to the base.

// 2. Process:
//    * Multiply the base by the height.
//    * Divide the result by 2.

// 3. Output:
//    * area of triangle: the result of the computation.

const readline = require('readline');

const rl = readline.createInterface(process.stdin, process.stdout);

function areaOfTriangle(base, height) {
    const area = (base * height) / 2;
    return area;
}

rl.question('Enter the base of the triangle: ', (base) => {
    rl.question('Enter the height of the triangle: ', (height) => {
        const result = areaOfTriangle(base, height);
        console.log(`The area of the triangle is ${result} square units.`);
        rl.close();
    })
});