function combination(input) {
    let start = input[0].charCodeAt();
    let finish = input[1].charCodeAt();;
    let letterCombination = input[2].charCodeAt();
    let result = "";
    let number = 0;

    for (let i = start; i <= finish; i++) {
        if (i == letterCombination) {
            continue;
        }

        for (let j = start; j <= finish; j++) {
            if (j == letterCombination) {
                continue;
            }

            for (let k = start; k <= finish; k++) {
                if (k == letterCombination) {
                    continue;
                }
                result += String.fromCharCode(i) + String.fromCharCode(j) + String.fromCharCode(k) + " ";
                number++;
            }
        }
    }
    console.log(result + "" + number);
}
combination(["a", "c", "b"])