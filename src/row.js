export default function Row() {
  this.values = Array(3);
}

Row.prototype.addNumber = function (number, index) {
  if (isNaN(number)) {
    return false;
  } else {
    this.values[index] = number;
  }
}
