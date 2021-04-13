export default function Row() {
  this.values = Array(3);
}

function isAValidNumber(number) {
  if ((number < 10 && number > 0) && !isNaN(number)) {
    return true
  }
}

Row.prototype.addNumberToRow = function (number, index) {
  if (isAValidNumber(number) && (index >= 0 && index <= 2) && !this.values.includes(number)) {
    this.values[index] = number;
  }
}