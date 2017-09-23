var mergeSort = function(object, filter = (a, b) => a < b ? -1 : a > b ?  1 : 0) {
    var sort = function(arrayLike) {
        if (arrayLike.length <= 1) { return arrayLike; }
        
        var midIndex = Math.floor(arrayLike.length / 2);
        var leftArray = arrayLike.slice(0, midIndex);
        var rightArray = arrayLike.slice(midIndex);

        return merge(sort(leftArray), sort(rightArray));
    }

    var merge = function(leftHalf, rightHalf) {
        var merged = [];
        while (leftHalf.length && rightHalf.length) {
            var result = filter(leftHalf[0], rightHalf[0]);
            if (result === 0) {
                merged.push(leftHalf[0] < rightHalf[0] ? leftHalf.shift() : rightHalf.shift());
            } else {
                merged.push(result < 0 ? leftHalf.shift() : rightHalf.shift());
            }
        }
        while (leftHalf.length) {
            merged.push(leftHalf.shift());
        }
        while (rightHalf.length) {
            merged.push(rightHalf.shift());
        }
        return merged;
    }

    if (Array.isArray(object)) {
        return sort(object);
    }
}