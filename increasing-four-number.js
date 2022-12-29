function increasing([input1, input2]) {
    let first = Number(input1);
    let second = Number(input2);
    let count = 0;

    for (let i = first; i <= second; i++) {
        for (let j = i + 1; j <= second; j++) {
            for (let k = j + 1; k <= second; k++) {
                for (let f = k + 1; f <= second; f++) {
                    console.log(i + ' ' + j + ' ' + k + ' ' + f);
                    count++;
                }
            }
        }
    }

    if (count === 0) {
        console.log("No");
    }
}
increasing([5, 7])