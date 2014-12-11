console.time('Loading module');
var Module = require('./build/minisatp.js')();
console.timeEnd('Loading module');

console.log(Module.MEMSTATS);
var ptr = Module._yo();
console.log(Module.MEMSTATS);
Module._unyo(ptr);
console.log(Module.MEMSTATS);

var T = Date.now();
var queensResultPtr = Module._eightQueens(1, 1);
var queensResult = [];
var i = 0;
for (var r = 1; r <= 8; r++) {
  var curArray = [];
  queensResult.push(curArray);
  for (var c = 1; c <= 8; c++) {
    curArray.push(Module.getValue(queensResultPtr + i, 'i8'));
    i++;
  }
}
var timeTaken = (Date.now() - T);
Module._freeBytes(queensResultPtr);
console.log(queensResult);
console.log("TIME:", timeTaken, "ms");
