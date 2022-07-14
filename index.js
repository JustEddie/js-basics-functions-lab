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
    const distance = distanceTravelledInFeet(start, destination);
    let price = 0;

    if (distance > 2500) {
        return 'cannot travel that far';
    } else if (2000 < distance && distance <= 2500) {
        return 25;
    } else if (400 < distance && distance <= 2000) {
        console.log(distance);
        return 0.02*(distance - 400);
    } else {
        return 0;
    }
}

console.log(calculatesFarePrice(33,32));