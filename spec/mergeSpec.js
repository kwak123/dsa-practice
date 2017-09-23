describe('merge.js', function() {
    it('should sort an array of primitives of even length', function() {
        var primitiveArray = [1, 5, 3, 9, 2, 8, 11, 15, 13, 19];
        var sortArray = mergeSort([1, 5, 3, 9, 2, 8, 11, 15, 13, 19]);
        var equal = _.isEqual(sortArray, primitiveArray.sort((a, b) => a - b));
        expect(equal).to.equal(true);
    });

    it('should sort an array of primitives of odd length', function() {
        var primitiveArray = [1, 5, 3, 9, 2, 8, 11, 15, 13];
        var sortArray = mergeSort([1, 5, 3, 9, 2, 8, 11, 15, 13]);
        var equal = _.isEqual(sortArray, primitiveArray.sort((a, b) => a - b));
        expect(equal).to.equal(true);
    })

    it('should sort an array of primitives of even length, given a filter', function() {
        var filter = (a, b) => b - a;
        var primitiveArray = [1, 5, 3, 9, 2, 8, 11, 15, 13, 19];
        var sortArray = mergeSort([1, 5, 3, 9, 2, 8, 11, 15, 13, 19], filter);
        var equal = _.isEqual(sortArray, primitiveArray.sort(filter));
        expect(equal).to.equal(true);
    });

    it('should sort an array of primitives of odd length, given a filter', function() {
        var filter = (a, b) => b - a;
        var primitiveArray = [1, 5, 3, 9, 2, 8, 11, 15, 13];
        var sortArray = mergeSort([1, 5, 3, 9, 2, 8, 11, 15, 13], filter);
        var equal = _.isEqual(sortArray, primitiveArray.sort(filter));
        expect(equal).to.equal(true);
    });
});