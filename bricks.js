function bricks([numberOfBricks, numberOfWorkers, trolleyCapacity]) {
    let bricks = parseInt(numberOfBricks);
    let works = parseInt(numberOfWorkers);
    let trolley = parseInt(trolleyCapacity);

    let bricketsOneCourse = works * trolley;
    let totalCources = Math.ceil(bricks / bricketsOneCourse);

    console.log(totalCources);
}
bricks([5, 12, 30])