describe('merge.js', function() {
    it('should sort an array of primitives of even length', function() {
        var primitiveArray = [1, 5, 3, 9, 2, 8, 11, 13, 15, 19];
        var sortArray = mergeSort([1, 5, 3, 9, 2, 8, 11, 13, 15, 19]);
        var equal = _.isEqual(sortArray, primitiveArray.sort((a, b) => a - b));
        expect(equal).to.equal(true);
    });

    it('should sort an array of primitives of odd length', function() {
        var primitiveArray = [1, 5, 3, 9, 2, 8, 11, 13, 15];
        var sortArray = mergeSort([1, 5, 3, 9, 2, 8, 11, 13, 15]);
        console.log(sortArray);
        var equal = _.isEqual(sortArray, primitiveArray.sort((a, b) => a - b));
        expect(equal).to.equal(true);
    })
});