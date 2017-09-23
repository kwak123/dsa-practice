var insertSort = function(array, filter = (a, b) => a - b) {
    var sortedArray = [];
    sortedArray.push(array.shift());
    while (array.length > 0) {
        var holder = array.shift();
        var replace = sortedArray.length;
        for (var i = 0; i < sortedArray.length; i++) {
            var result = filter(sortedArray[i], holder);
            if (result > 0) {
                replace = i;
                break;
            }
        }
        sortedArray.splice(replace, 0, holder);
    }
    return sortedArray;
}