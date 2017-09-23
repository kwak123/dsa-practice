describe('bubble.js', function() {
    it('should sort an array of numbers of even length', function() {
        var primitiveArray = [1, 5, 3, 9, 2, 8, 11, 13, 15, 19];
        var sortArray = bubbleSort([1, 5, 3, 9, 2, 8, 11, 13, 15, 19]);
        var equal = _.isEqual(sortArray, primitiveArray.sort((a, b) => a - b));
        expect(equal).to.equal(true);
    });

    it('should sort an array of numbers of odd length', function() {
        var primitiveArray = [1, 5, 3, 9, 2, 8, 11, 13, 15];
        var sortArray = bubbleSort([1, 5, 3, 9, 2, 8, 11, 13, 15]);
        var equal = _.isEqual(sortArray, primitiveArray.sort((a, b) => a - b));
        expect(equal).to.equal(true);
    })

    it('should sort an array of numbers of even length, given a filter', function() {
        var filter = (a, b) => b - a;
        var primitiveArray = [1, 5, 3, 9, 2, 8, 11, 15, 13, 19];
        var sortArray = bubbleSort([1, 5, 3, 9, 2, 8, 11, 15, 13, 19], filter);
        var equal = _.isEqual(sortArray, primitiveArray.sort(filter));
        expect(equal).to.equal(true);
    });

    it('should sort an array of numbers of odd length, given a filter', function() {
        var filter = (a, b) => b - a;
        var primitiveArray = [1, 5, 3, 9, 2, 8, 11, 15, 13];
        var sortArray = bubbleSort([1, 5, 3, 9, 2, 8, 11, 15, 13], filter);
        var equal = _.isEqual(sortArray, primitiveArray.sort(filter));
        expect(equal).to.equal(true);
    });

    it('should sort an array of strings of even length', function() {
        var primitiveArray = ['hi', 'this', 'is', 'a', 'test', 'of', 'how', 'to', 'sort', 'filters'];
        var sortArray = bubbleSort(['hi', 'this', 'is', 'a', 'test', 'of', 'how', 'to', 'sort', 'filters']);
        var equal = _.isEqual(sortArray, primitiveArray.sort());
        expect(equal).to.equal(true);
    });

    it('should sort an array of strings of odd length', function() {
        var primitiveArray = ['hi', 'this', 'is', 'a', 'test', 'of', 'how', 'to', 'sort', 'filters', 'again'];
        var sortArray = bubbleSort(['hi', 'this', 'is', 'a', 'test', 'of', 'how', 'to', 'sort', 'filters', 'again']);
        var equal = _.isEqual(sortArray, primitiveArray.sort());
        expect(equal).to.equal(true);
    });

    it('should stable sort an array of strings of even length, given a filter', function() {
        var filter = (a, b) => a.length - b.length;
        var expectedArray = ['a', 'hi', 'is', 'of', 'to', 'how', 'sort', 'test', 'this', 'filters'];
        var sortArray = bubbleSort(['hi', 'this', 'is', 'a', 'test', 'of', 'how', 'to', 'sort', 'filters'], filter);
        var equal = _.isEqual(sortArray, expectedArray);
        expect(equal).to.equal(true);
    });

    it('should stable sort an array of strings of odd length, given a filter', function() {
        var filter = (a, b) => a.length - b.length;
        var expectedArray = ['a', 'hi', 'is', 'of', 'to', 'how', 'sort', 'test', 'this', 'again', 'filters'];
        var sortArray = bubbleSort(['hi', 'this', 'is', 'a', 'test', 'of', 'how', 'to', 'sort', 'filters', 'again'], filter);
        var equal = _.isEqual(sortArray, expectedArray);
        expect(equal).to.equal(true);
    });
});