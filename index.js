function iterativeLog(array, callback) {
  array.forEach(callback);
}


function callback(iterativeLog, index, array) {
  console.log(`${index}: ${element}`);
}

function iterate(callback) {
  var candy = ['twix', 'm&m\'s', 'butterfingers']
  candy.forEach(callback)
  return candy;
}

function doToArray(array, callback) {
  array.forEach(callback);
}