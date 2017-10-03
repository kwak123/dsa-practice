var quickSort = function(object, filter = (a, b) => a < b ? -1 : a > b ?  1 : 0) {
  if (object.length <= 1) return object;

  var sort = function(array, low, high) {
    if (low < high) {
      var part = partition(array, low, high);
      sort(array, low, part - 1);
      sort(array, part + 1, high);
    }
  }

  var partition = function(array, low, high) {
    var pivot = array[high];
    var index = low - 1;
    for (var j = low; j < high; j++) {
      if (array[j] < pivot) {
        index++;
        swap(array, index, j);
      }
    }
    if (array[high] < array[index + 1]) {
      swap(array, index+1, high);
    }
    return index + 1;
  }

  var swap = function(array, index1, index2) {
    var holder = array[index1];
    array[index1] = array[index2];
    array[index2] = holder;
  }
  
  sort(object, 0, object.length - 1);
  return object;
}