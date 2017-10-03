describe('selection.js', function() {
  it('should sort an array of numbers of even length', function() {
    var filter = (a, b) => a - b;
    var primitiveArray = [1, 5, 3, 9, 2, 8, 11, 13, 15, 19];
    var sortArray = selectSort([1, 5, 3, 9, 2, 8, 11, 13, 15, 19]);
    expect(sortArray).to.eql(primitiveArray.sort(filter));
  });

  it('should sort an array of numbers of odd length', function() {
    var filter = (a, b) => a - b;
    var primitiveArray = [1, 5, 3, 9, 2, 8, 11, 13, 15];
    var sortArray = selectSort([1, 5, 3, 9, 2, 8, 11, 13, 15]);
    expect(sortArray).to.eql(primitiveArray.sort(filter));
  });

  it('should sort an array of numbers of even length, given a filter', function() {
    var filter = (a, b) => b - a;
    var primitiveArray = [1, 5, 3, 9, 2, 8, 11, 15, 13, 19];
    var sortArray = selectSort([1, 5, 3, 9, 2, 8, 11, 15, 13, 19], filter);
    expect(sortArray).to.eql(primitiveArray.sort(filter));
  });

  it('should sort an array of numbers of odd length, given a filter', function() {
    var filter = (a, b) => b - a;
    var primitiveArray = [1, 5, 3, 9, 2, 8, 11, 15, 13];
    var sortArray = selectSort([1, 5, 3, 9, 2, 8, 11, 15, 13], filter);
    expect(sortArray).to.eql(primitiveArray.sort(filter));
  });

  it('should sort an array of strings of even length', function() {
    var primitiveArray = ['hi', 'this', 'is', 'a', 'test', 'of', 'how', 'to', 'sort', 'filters'];
    var sortArray = selectSort(['hi', 'this', 'is', 'a', 'test', 'of', 'how', 'to', 'sort', 'filters']);
    expect(sortArray).to.eql(primitiveArray.sort());
  });

  it('should sort an array of strings of odd length', function() {
    var primitiveArray = ['hi', 'this', 'is', 'a', 'test', 'of', 'how', 'to', 'sort', 'filters', 'again'];
    var sortArray = selectSort(['hi', 'this', 'is', 'a', 'test', 'of', 'how', 'to', 'sort', 'filters', 'again']);
    expect(sortArray).to.eql(primitiveArray.sort());
  });

  it('should stable sort an array of strings of even length, given a filter', function() {
    var filter = (a, b) => a.length - b.length;
    var sampleArray = ['hi', 'this', 'is', 'a', 'test', 'of', 'how', 'to', 'sort', 'filters'];
    var expectedArray = ['a', 'hi', 'is', 'of', 'to', 'how', 'this', 'test', 'sort', 'filters'];
    var sortArray = selectSort(sampleArray, filter);
    expect(sortArray).to.eql(expectedArray);
  });

  it('should stable sort an array of strings of odd length, given a filter', function() {
    var filter = (a, b) => a.length - b.length;
    var sampleArray = ['hi', 'this', 'is', 'a', 'test', 'of', 'how', 'to', 'sort', 'filters', 'again'];
    var expectedArray = ['a', 'hi', 'is', 'of', 'to', 'how', 'this', 'test', 'sort', 'again', 'filters'];
    var sortArray = selectSort(sampleArray, filter);
    expect(sortArray).to.eql(expectedArray);
  });

  it('should sort an array of objects, given a filter', function() {
    var filter = (a, b) => a.size - b.size;
    var objectArray = [{size: 2}, {size: 8}, {size: 6}, {size: 7}, {size: 9}, {size: 3}];
    var sortArray = bubbleSort(objectArray, filter);
    expect(sortArray).to.eql(objectArray.sort(filter));
  });

  it('should stable sort an array of objects, given a filter', function() {
    var filter = (a, b) => a.size - b.size;
    var objectArray = [{size: 2, name: 'a'}, {size: 8, name: 'b'}, {size: 6, name: 'd'}, {size: 7, name: 'g'}, 
                      {size: 9, name: 'z'}, {size: 6, name: 'g'}, {size: 3, name: 'r'}, {size: 8, name: 'd'}];
    var expectArray = [{size: 2, name: 'a'}, {size: 3, name: 'r'}, {size: 6, name: 'd'}, {size: 6, name: 'g'},
                      {size: 7, name: 'g'}, {size: 8, name: 'b'}, {size: 8, name: 'd'}, {size: 9, name: 'z'}];
    var sortArray = bubbleSort(objectArray, filter);
    expect(sortArray).to.eql(expectArray);
  });
});