var bubbleSort = function(object, filter = (a, b) => a < b ? -1 : a > b ?  1 : 0) {
    var swap = function(arrayLike, index1, index2) {
        var holder = arrayLike[index1];
        arrayLike[index1] = arrayLike[index2];
        arrayLike[index2] = holder;
    }

    for (var i = object.length; i > 0; i--) {
        for (var j = 0; j < i - 1; j++) {
            var result = filter(object[j], object[j + 1]);
            if (result === 0) {
                if (object[j] > object[j+1]) {
                    swap(object, j, j + 1);
                }
            } else if (result > 0) {
                swap(object, j, j + 1);
            }
        }
    }
    
    return object;
}