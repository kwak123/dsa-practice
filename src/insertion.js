var insertSort = function(array) {
    var sortedArray = [];
    sortedArray.push(array.shift());
    while (array.length > 0) {
        var holder = array.shift();
        var replace = sortedArray.length;
        for (var i = 0; i < sortedArray.length; i++) {
            if (sortedArray[i] > holder) {  
                replace = i;
                break;
            }
        }
        sortedArray.splice(replace, 0, holder);
    }
    return sortedArray;
}