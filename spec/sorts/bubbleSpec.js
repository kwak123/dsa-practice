describe('bubble.js', function() {
  it('should sort an array of numbers of even length', function() {
    var filter = (a, b) => a - b;
    var primitiveArray = [1, 5, 3, 9, 2, 8, 11, 13, 15, 19];
    var sortArray = bubbleSort([1, 5, 3, 9, 2, 8, 11, 13, 15, 19]);
    expect(sortArray).to.eql(primitiveArray.sort(filter));
  });

  it('should sort an array of numbers of odd length', function() {
    var filter = (a, b) => a - b;
    var primitiveArray = [1, 5, 3, 9, 2, 8, 11, 13, 15];
    var sortArray = bubbleSort([1, 5, 3, 9, 2, 8, 11, 13, 15]);
    expect(sortArray).to.eql(primitiveArray.sort(filter));
  })

  it('should sort an array of numbers of even length, given a filter', function() {
    var filter = (a, b) => b - a;
    var primitiveArray = [1, 5, 3, 9, 2, 8, 11, 15, 13, 19];
    var sortArray = bubbleSort([1, 5, 3, 9, 2, 8, 11, 15, 13, 19], filter);
    expect(sortArray).to.eql(primitiveArray.sort(filter));
  });

  it('should sort an array of numbers of odd length, given a filter', function() {
    var filter = (a, b) => b - a;
    var primitiveArray = [1, 5, 3, 9, 2, 8, 11, 15, 13];
    var sortArray = bubbleSort([1, 5, 3, 9, 2, 8, 11, 15, 13], filter);
    expect(sortArray).to.eql(primitiveArray.sort(filter));
  });

  it('should sort an array of strings of even length', function() {
    var primitiveArray = ['hi', 'this', 'is', 'a', 'test', 'of', 'how', 'to', 'sort', 'filters'];
    var sortArray = bubbleSort(['hi', 'this', 'is', 'a', 'test', 'of', 'how', 'to', 'sort', 'filters']);
    expect(sortArray).to.eql(primitiveArray.sort());
  });

  it('should sort an array of strings of odd length', function() {
    var primitiveArray = ['hi', 'this', 'is', 'a', 'test', 'of', 'how', 'to', 'sort', 'filters', 'again'];
    var sortArray = bubbleSort(['hi', 'this', 'is', 'a', 'test', 'of', 'how', 'to', 'sort', 'filters', 'again']);
    expect(sortArray).to.eql(primitiveArray.sort());
  });

  it('should stable sort an array of strings of even length, given a filter', function() {
    var filter = (a, b) => a.length - b.length;
    var sampleArray = ['hi', 'this', 'is', 'a', 'test', 'of', 'how', 'to', 'sort', 'filters'];
    var expectedArray = ['a', 'hi', 'is', 'of', 'to', 'how', 'this', 'test', 'sort', 'filters'];
    var sortArray = bubbleSort(sampleArray, filter);
    expect(sortArray).to.eql(expectedArray);
  });

  it('should stable sort an array of strings of odd length, given a filter', function() {
    var filter = (a, b) => a.length - b.length;
    var sampleArray = ['hi', 'this', 'is', 'a', 'test', 'of', 'how', 'to', 'sort', 'filters', 'again'];
    var expectedArray = ['a', 'hi', 'is', 'of', 'to', 'how', 'this', 'test', 'sort', 'again', 'filters'];
    var sortArray = bubbleSort(sampleArray, filter);
    expect(sortArray).to.eql(expectedArray);
  });

  // it('should sort an array of objects, given a filter', function() {
  //     var filter = (a, b, field) => a.field - b.field;
  //     var objectArray = [{size: 2}, {size: 8}, {size: 6}, {size: 7}, {size: 9}, {size: 3}];
  //     var sortArray = bubbleSort([{size: 2}, {size: 8}, {size: 6}, {size: 7}, {size: 9}, {size: 3}], filter);
  //     console.log(sortArray);
  //     var equal = _.isEqual(sortArray, objectArray.sort((a, b) => a.size > b.size));
  //     expect(equal).to.equal(true);
  // });
});