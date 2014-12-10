// (start of emscripten-preamble.js)
cMinisatp = function () {
  var module = {};
// Put emscripten in "node mode" but don't give it the real `process`
// object.  It does have access to `console`.
var require = function () {};
var process = {
  argv: ['node', 'minisatp'],
  on: function () {},
  stdout: {
    write: function (str) {
      console.log("MINISAT-out:", str);
    }
  },
  stderr: {
    write: function (str) {
      console.log("MINISAT-err:", str);
    }
  }
};
var window = 0;
// (end of emscripten-preamble.js)
