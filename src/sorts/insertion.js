var insertSort = function(object, filter = (a, b) => a < b ? -1 : a > b ?  1 : 0) {
    var sortedObject = [];
    sortedObject.push(object.shift());
    while (object.length > 0) {
        var holder = object.shift();
        var replace = sortedObject.length;
        for (var i = 0; i < sortedObject.length; i++) {
            var result = filter(sortedObject[i], holder);
            if (result === 0) {
                if (sortedObject[i] > holder) {
                    replace = i;
                    break;
                }
            }
            if (result > 0) {
                replace = i;
                break;
            }
        }
     sortedObject.splice(replace, 0, holder);
    }
    return sortedObject;
}