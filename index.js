// Code your solution in this file!
function distanceFromHqInBlocks(location) {
    return Math.abs(42 - location);
}
function distanceFromHqInFeet (location) {
    return distanceFromHqInBlocks(location) *264;
}
function distanceTravelledInFeet (location1, location2) {
    return Math.abs(location1 - location2) * 264;
}
function calculatesFarePrice(location1, location2) {
    let distance = distanceTravelledInFeet (location1, location2);
    if (distance <= 400) {
        return 0;
    }
    if (distance <= 2000) {
        distance -= 400;
        return distance * .02;
    }
    if (distance>= 2500) {
        return 'cannot travel that far'
    }
    else {
        return 25;
    }
}