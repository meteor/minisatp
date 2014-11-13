// (start of emscripten-midamble.js)
// This "midamble" is hacked into the output JS in a place
// where it has access to the inner function generated
// by Emscripten, the one that starts with "use asm".
setInnerMalloc = function (hookedMalloc) {
  _malloc = hookedMalloc;
};
setInnerFree = function (hookedFree) {
  _free = hookedFree;
};
// (end of emscripten-midamble.js)
