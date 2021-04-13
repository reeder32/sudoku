export default function Row() {
  this.values = Array(3);
}

Row.prototype.addNumber = function (number, index) {
  if (!isNaN(number) && (index >= 0 && index <= 2)) {
    this.values[index] = number;
  }
}
