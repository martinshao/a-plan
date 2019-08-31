function CArray(numElements) {
  this.dataStore = [];
  this.pos = 0;
  this.numElements = numElements;
  this.insert = insert;
  this.toString = toString;
  this.clear = clear;
  this.setData = setData;
  this.swap = swap;
  this.bubbleSort = bubbleSort;

  for(var i = 0; i < numElements; ++i) {
    this.dataStore[i] = i;
  }
}

function setData() {
  for (let i = 0; i < this.numElements; i++) {
    this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1));
  }
}

function clear() {
  for (let i = 0; i < this.dataStore.length; i++) {
    this.dataStore[i] = 0;
  }
}

function insert(element) {
  this.dataStore[this.pos++] = element;
}

function toString() {
  let retstr = '';
  for (let i = 0; i < this.dataStore.length; i++) {
    retstr += this.dataStore[i] + ' ';
    if(i > 0 && i % 10 ==0) {
      retstr += '\n';
    }
  }
  return retstr;
}

function swap(arr, index1, index2) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

function selectionSort() {
  let min, temp;
  for(var outer = 0; outer <= this.dataStore.length - 2; ++outer) {
    min = outer;
    for(let inner = outer + 1; inner <= this.dataStore.length - 1; ++innter) {
      if(this.dataStore[inner] < this.dataStore[min]) {
        min = inner;
      }
      swap(this.dataStore, outer, min);
    }
  }
}

var numElements = 10;
var mynums = new CArray(numElements);
mynums.setData();
console.info(mynums.toString());
mynums.bubbleSort();
console.info('...ovo...');
console.info(mynums.toString())

function selectionSort(arr) {
  var len = arr.length;
  var minIndex, temp;
  for (var i = 0; i < len - 1; i++) {
      minIndex = i;
      for (var j = i + 1; j < len; j++) {
          if (arr[j] < arr[minIndex]) {     // 寻找最小的数
              minIndex = j;                 // 将最小数的索引保存
          }
      }
      temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
  }
  return arr;
} 