var bubbleSort = function(array, filter = (a, b) => a < b ? -1 : a > b ?  1 : 0) {
    var swap = function(array, index1, index2) {
        var holder = array[index1];
        array[index1] = array[index2];
        array[index2] = holder;
    }

    for (var i = array.length; i > 0; i--) {
        for (var j = 0; j < i - 1; j++) {
            var result = filter(array[j], array[j + 1]);
            if (result === 0) {
                if (array[j] > array[j+1]) {
                    swap(array, j, j + 1);
                }
            } else if (result > 0) {
                swap(array, j, j + 1);
            }
        }
    }
    
    return array;
}