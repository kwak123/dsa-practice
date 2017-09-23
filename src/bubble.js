var bubbleSort = function(array) {
    for (var i = array.length; i > 0; i--) {
        for (var j = 0; j < i; j++) {
            if (array[j] > array[j + 1]) {
                var holder = array[j];
                array[j] = array[j + 1];
                array[j + 1] = holder;
            }
        }
    }
    return array;
}