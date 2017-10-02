var selectSort = function(array, filter = (a, b) => a < b ? -1 : a > b ?  1 : 0) {
  var getMinimumIndex = function(array) {
    var min = array[0];
    var index = 0;
    if (array.length > 1) {
      for (var i = 0; i < array.length; i++) {
        var result = filter(array[i], min);
        if (result < 0) {
          min = array[i];
          index = i;
        }
      }
    }
    return index;
  }
  var sorted = [];
  while (array.length > 0) {
    var minIndex = getMinimumIndex(array);
    sorted.push(array.splice(minIndex, 1)[0]);
  }
  return sorted;
}