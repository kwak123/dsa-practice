var mergeSort = function(obj, filter = (a, b) => a - b) {

    var sort = function(array) {
        if (array.length <= 1) { return array; }
        
        var midIndex = Math.floor(array.length / 2);
        var leftArray = array.slice(0, midIndex);
        var rightArray = array.slice(midIndex);

        return merge(sort(leftArray), sort(rightArray));
    }

    var merge = function(array1, array2) {
        var merged = [];
        while (array1.length && array2.length) {
            var result = filter(array1[0], array2[0]);
            merged.push(result < 0 ? array1.shift() : array2.shift());
        }
        while (array1.length) {
            merged.push(array1.shift());
        }
        while (array2.length) {
            merged.push(array2.shift());
        }
        return merged;
    }

    if (Array.isArray(obj)) {
        return sort(obj);
    }
}