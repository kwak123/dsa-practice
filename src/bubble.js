var bubbleSort = function(array, filter = (a, b) => a - b) {
    for (var i = array.length; i > 0; i--) {
        for (var j = 0; j < i; j++) {
            var result = filter(array[j], array[j + 1]);
            if (result > 0) {
                var holder = array[j];
                array[j] = array[j + 1];
                array[j + 1] = holder;
            }
        }
    }
    return array;
}