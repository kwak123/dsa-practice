var insertSort = function(array, filter) {
    var sortedArray = [];
    sortedArray.push(array.shift());
    while (array.length > 0) {
        var holder = array.shift();
        var replace = sortedArray.length;
        for (var i = 0; i < sortedArray.length; i++) {
            var result;
            if (filter) {
                result = filter(sortedArray[i], holder);
            } else {
                result = sortedArray[i] < holder ? -1 :
                         sortedArray[i] > holder ?  1 : 0;
            }
            if (result === 0) {
                if (sortedArray[i] > holder) {
                    replace = i;
                    break;
                }
            }
            if (result > 0) {
                replace = i;
                break;
            }
        }
        sortedArray.splice(replace, 0, holder);
    }
    return sortedArray;
}