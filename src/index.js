
exports.min = function min (array) {
  return array?.length ? Math.min.apply(Math, array) : 0;
}

exports.max = function max (array) {
  return array?.length ? Math.max.apply(Math, array) : 0;
}

exports.avg = function avg (array) {
  return array?.length ? array.reduce((a,b) => a+b, 0) / array.length : 0;
}
