const readline = require('readline');

const rl = readline.createInterface(process.stdin, process.stdout);

let students = [];

const askQuestion = (query) => {
    return new Promise(resolve => rl.question(query, resolve));
}

(async () => {
    for (let index = 0; index < 3; index++) {
        const name = await askQuestion(`Enter the name of student ${index + 1}: `);
        const marks = await askQuestion(`Enter the marks of student ${index + 1}: `);
        let newStudent = {
            name: name,
            marks: parseFloat(marks)
        }
        students.push(newStudent)
    }

    students.sort((a, b) => b.marks - a.marks)

    console.log('Sorted list of students in descending order of marks:');
    students.forEach(student => {
        console.log(`${student.name}: ${student.marks}`)
    })

    rl.close();
})();