function sumNumber([firstNumber, secondNumber, thirdNumber]) {
    var first = parseInt(firstNumber);
    var second = parseInt(secondNumber);
    var third = parseInt(thirdNumber);

    if (first + second == third) {
        if (first > second) {
            console.log(`${second} + ${first} = ${third}`);
        }
        else {
            console.log(`${first} + ${second} = ${third}`);
        }
    }
    else if (first + third == second) {
        if (first > third) {
            console.log(`${third} + ${first} = ${second}`);
        }
        else {
            console.log(`${first} + ${third} = ${second}`);
        }
    }
    else if (second + third == first) {
        if (second > third) {
            console.log(`${third} + ${second} = ${first}`);
        }
        else {
            console.log(`${second} + ${third} = ${first}`);
        }
    }
    else {
        console.log("No");
    }
}
sumNumber([3, 5, 2])