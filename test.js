var Module = require('./build/minisatp.js');

console.log(Module.MEMSTATS);
var ptr = Module._yo();
console.log(Module.MEMSTATS);
Module._unyo(ptr);
console.log(Module.MEMSTATS);
