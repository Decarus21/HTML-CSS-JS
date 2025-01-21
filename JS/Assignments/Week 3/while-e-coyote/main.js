function numberDoubler(num) {
    while (num < 100){
        num += 2;
    }
    return num;
}
console.log(numberDoubler(51));
console.log(numberDoubler(100));
console.log(numberDoubler(26));

function stringRepeater(str) {
    let result = str;
    while (result.length < 10){
        result += str;
    }
    return result;
}
console.log(stringRepeater("abc"));
console.log(stringRepeater("a"));
console.log(stringRepeater("hotdog"));

function makeDivisible(x, y) {
    while (x % y !== 0){
        x++;
    }
    return x;
}
console.log(makeDivisible(9, 1));
console.log(makeDivisible(9, 2));
console.log(makeDivisible(11, 3))
console.log(makeDivisible(10, 3))
console.log(makeDivisible(5, 4));
console.log(makeDivisible(16, 5));

module.exports = {
    numberDoubler,
    stringRepeater,
    makeDivisible
};