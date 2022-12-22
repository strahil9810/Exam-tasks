function sumNumber(input) {
    let n = parseInt(input[0]);
    var sum1 = 0;
    var sum2 = 0;
    var sum3 = 0;

    for (let i = 0; i < n; i++) {
        var num = parseInt(input[i]);

        if (i % 3 == 0) {
            sum1 += num;
        }
        if (i % 3 == 1) {
            sum2 += num;
        }
        if (i % 3 == 2) {
            sum3 += num;
        }
    }
    console.log('sum1 = ' + sum1);
    console.log('sum2 = ' + sum2);
    console.log('sum3 = ' + sum3);
}
sumNumber([2, 3, 5])