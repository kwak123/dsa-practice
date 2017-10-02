describe('quick.js', function() {
  it('should sort an array of numbers of even length', function() {
    var filter = (a, b) => a - b;
    var primitiveArray = [1, 5, 3, 9, 2, 8, 11, 15, 13, 19];
    var sortArray = quickSort([1, 5, 3, 9, 2, 8, 11, 15, 13, 19]);
    expect(sortArray).to.eql(primitiveArray.sort(filter));
  });

  it('should sort an array of numbers of odd length', function() {
    var filter = (a, b) => a - b;
    var primitiveArray = [1, 5, 3, 9, 2, 8, 11, 15, 13];
    var sortArray = quickSort([1, 5, 3, 9, 2, 8, 11, 15, 13]);
    expect(sortArray).to.eql(primitiveArray.sort(filter));
  });

  it('should sort an array of numbers of even length, given a filter', function() {
    var filter = (a, b) => b - a;
    var primitiveArray = [1, 5, 3, 9, 2, 8, 11, 15, 13, 19];
    var sortArray = quickSort([1, 5, 3, 9, 2, 8, 11, 15, 13, 19], filter);
    expect(sortArray).to.eql(primitiveArray.sort(filter));
  });

  it('should sort an array of numbers of odd length, given a filter', function() {
    var filter = (a, b) => b - a;
    var primitiveArray = [1, 5, 3, 9, 2, 8, 11, 15, 13];
    var sortArray = quickSort([1, 5, 3, 9, 2, 8, 11, 15, 13], filter);
    var equal = _.isEqual(sortArray, primitiveArray.sort(filter));
    expect(equal).to.equal(true);
  });

  it('should sort an array of strings of even length', function() {
    var primitiveArray = ['hi', 'this', 'is', 'a', 'test', 'of', 'how', 'to', 'sort', 'filters'];
    var sortArray = quickSort(['hi', 'this', 'is', 'a', 'test', 'of', 'how', 'to', 'sort', 'filters']);
    expect(sortArray).to.eql(primitiveArray.sort());
  });

  it('should sort an array of strings of odd length', function() {
    var primitiveArray = ['hi', 'this', 'is', 'a', 'test', 'of', 'how', 'to', 'sort', 'filters', 'again'];
    var sortArray = quickSort(['hi', 'this', 'is', 'a', 'test', 'of', 'how', 'to', 'sort', 'filters', 'again']);
    expect(sortArray).to.eql(primitiveArray.sort());
  });

  it('should stable sort an array of strings of even length, given a filter', function() {
    var filter = (a, b) => a.length - b.length;
    var sampleArray = ['hi', 'this', 'is', 'a', 'test', 'of', 'how', 'to', 'sort', 'filters'];
    var expectedArray = ['a', 'hi', 'is', 'of', 'to', 'how', 'sort', 'test', 'this', 'filters'];
    var sortArray = quickSort(sampleArray, filter);
    
  });

  it('should stable sort an array of strings of odd length, given a filter', function() {
    var filter = (a, b) => a.length - b.length;
    var sampleArray = ['hi', 'this', 'is', 'a', 'test', 'of', 'how', 'to', 'sort', 'filters', 'again'];
    var expectedArray = ['a', 'hi', 'is', 'of', 'to', 'how', 'sort', 'test', 'this', 'again', 'filters'];
    var sortArray = quickSort(sampleArray, filter);
    expect(sortArray).to.eql(expectedArray);
  });
});