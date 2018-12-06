function test() {
  try {
    var __njsEntryData__ = __njsTraceEntry__({
      file: "{{dirname}}\\input.js",
      name: "test",
      line: 1,
      args: []
    });

    var obj;
    {
      var tmpVar = (obj = {}, obj['test'] = 1, obj);
      __njsTraceExit__({entryData: __njsEntryData__, exception: false, line: 3, returnValue: tmpVar});
      return tmpVar;
    }

    __njsTraceExit__({entryData: __njsEntryData__, exception: false, line: 4, returnValue: null});
  } catch (__njsEX__) {
    __njsTraceExit__({entryData: __njsEntryData__, exception: true, line: 1, returnValue: null});
    throw __njsEX__;
  }
}
