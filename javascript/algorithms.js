// Algorithm: Area of a Triangle

// 1. Input:
//    * base: the length of the base of the triangle.
//    * height: the height of the triangle perpendicular to the base.

// 2. Process:
//    * Multiply the base by the height.
//    * Divide the result by 2.

// 3. Output:
//    * area: the area of the triangle.

const readline = require('readline');

const rl = readline.createInterface(process.stdin, process.stdout);

function areaOfTriangle(base, height) {
    return (base * height) / 2;
}

rl.question('Enter the base of the triangle: ', (base) => {
    rl.question('Enter the height of the triangle: ', (height) => {
        const area = areaOfTriangle(base, height);
        console.log(`The area of the triangle is ${area} square units.`);
        rl.close();
    })
})

// const base = 10;
// const height = 5;
// const area = areaOfTriangle(base, height);
// console.log(area); // 25