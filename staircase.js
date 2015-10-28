var input = 6;

var staircase = function() {
  'use strict';
  var n = input;
  for (var i = 0; i < input; i++) {
    for (var j = 0; j < n - 1 - i; j++) {
      process.stdout.write(' ');
    }
    for (var j = 0; j < i + 1; j++) {
      process.stdout.write('#');
    }
    process.stdout.write('\n');
  }
};

staircase();
