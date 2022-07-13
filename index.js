function distanceFromHqInBlocks(block) {
    return Math.abs(block - 42);
}

function distanceFromHqInFeet(block) {
    return distanceFromHqInBlocks(block)*264;
}

function distanceTravelledInFeet(block1, block2) {
    return Math.abs((block1-block2)*264);
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
    if (distance > 2500) {
        return 'cannot travel that far';
    } else if (2000 < distance <= 2500) {
        console.log(distance);
        return 25;
    } else if (400 < distance <= 2000) {
        return 0.02*(distance - 400);
    } else {
        return 0;
    }
}

console.log(calculatesFarePrice(33,32));