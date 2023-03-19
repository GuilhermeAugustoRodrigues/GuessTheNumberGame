function isNaN(value) {
  if (Number.isNaN(+value)) {
    return 'Try guessing a number next time!';
  }
}

function isHigherThenMax(value, maxValue) {
  if (value > maxValue) {
    return `The max value is: ${maxValue}`;
  }
}

function isLowerThenMin(value, minValue) {
  if (value < minValue) {
    return `The min value is: ${minValue}`;
  }
}

function validate(value, maxValue, minValue) {
  let error = isNaN(value);
  if (error) {
    return error;
  }
  error = isHigherThenMax(value, maxValue);
  if (error) {
    return error;
  }
  error = isLowerThenMin(value, minValue);
  if (error) {
    return error;
  }
}

export {
  validate,
}