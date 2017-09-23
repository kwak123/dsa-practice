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
                } else if (result === 0) {
                    if (array[i] < min) {
                        min = array[i];
                        index = i;
                    }
                }
            }
        } else {
            return index;
        }
        return index;
    }

    var unsorted = array.slice(0);
    var sorted = [];
    
    while (unsorted.length > 0) {
        var minIndex = getMinimumIndex(unsorted);
        sorted.push(unsorted.splice(minIndex, 1)[0]);
    }

    return sorted;
}