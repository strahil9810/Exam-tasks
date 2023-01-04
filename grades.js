function grades(input) {
    let numberStudents = Number(input[0]);
    let numberFailedStudents = 0;
    let numberAverageStudent = 0;
    let numberGoodStudents = 0;
    let numberExcellentStudent = 0;
    let totalResult = 0;

    for (let i = 1; i <= numberStudents; i++) {
        let grade = Number(input[i]);
        totalResult += grade;

        if (grade <= 2.99) {
            numberFailedStudents++;
        }
        else if (grade >= 3 && grade <= 3.99) {
            numberAverageStudent++;
        }
        else if (grade >= 4 && grade <= 4.99) {
            numberGoodStudents++;
        }
        else if (grade >= 5) {
            numberExcellentStudent++;
        }
    }
    let failed = (numberFailedStudents / (numberStudents * 1.0)) * 100;
    let average = (numberAverageStudent / (numberStudents * 1.0)) * 100;
    let good = (numberGoodStudents / (numberStudents * 1.0)) * 100;
    let excellent = (numberExcellentStudent / (numberStudents * 1.0)) * 100;
    let total = totalResult / numberStudents;

    console.log(`Top students: ${excellent.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${good.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${average.toFixed(2)}%`);
    console.log(`Fail: ${failed.toFixed(2)}%`);
    console.log(`Average: ${total.toFixed(2)}`);

}
grades([10, 3.00, 2.99, 5.68, 3.01, 4, 4, 6.00, 4.50, 2.44, 5])