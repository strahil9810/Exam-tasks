function distance(input) {
    let initialSpeed = Number(input[0]);
    let firstTime = Number(input[1]);
    let secondTime = Number(input[2]);
    let thirdTime = Number(input[3]);

    let minutesPerHour = 60;

    let firstIntervalHour = firstTime / minutesPerHour;
    let firstDistance = initialSpeed * firstIntervalHour;

    let speedAfterIncrease = initialSpeed + ((initialSpeed * 10) / 100);
    let secondInterHour = secondTime / minutesPerHour;
    let secondDistance = speedAfterIncrease * secondInterHour;

    let speedAfterReduce = speedAfterIncrease - ((speedAfterIncrease * 5) / 100);
    let thirdInterHour = thirdTime / minutesPerHour;
    let thirdDistance = speedAfterReduce * thirdInterHour;

    let result=firstDistance+secondDistance+thirdDistance;
    console.log(result.toFixed(2));
}
distance([90, 60, 70, 80])