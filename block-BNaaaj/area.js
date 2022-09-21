function squareArea(a) {
  return a * a;
}
function rectangleArea(length, breadth) {
  return length * breadth;
}
function circleArea(radius) {
  return Math.PI * Math.pow(radius, 2);
}

module.exports = {
  squareArea,
  rectangleArea,
  circleArea,
};
