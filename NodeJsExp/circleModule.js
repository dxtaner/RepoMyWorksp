function circleArea(radius) {
    console.log(`Yarıçapı ${radius} olan dairenin alanı: ${Math.PI * radius * radius}`);
}
function circleCircumference(radius) {
    console.log(`Yarıçapı ${radius} olan dairenin çevresi: ${ 2 * Math.PI * radius}`);
}

module.exports = { circleArea, circleCircumference };