function iterativeLog(array) {
  array.forEach(callback);
  console.log(`${index}: ${element}`);
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