function Interval(start, end) {
  this.start = start;
  this.end = end;
}

var merge = function(intervals) {
  'use strict';
  intervals.sort(function(interval1, interval2) {
    return interval1.start - interval2.start;
  });
  let output = [];
  intervals.forEach(function(interval, i) {
    if (i) {
      let lastIndex = output.length - 1;
      if (interval.start <= output[lastIndex].end) {
        output[lastIndex].start = Math.min(
          output[lastIndex].start,
          interval.start
        );
        output[lastIndex].end = Math.max(
          output[lastIndex].end,
          interval.end
        );
      }else {
        output.push(interval);
      }
    }else {
      output.push(interval);
    }
  });
  return output;
};


var data;

data = [
  new Interval(15, 18),
  new Interval(1, 3),
  new Interval(2, 6),
  new Interval(8, 10)
];
console.log(merge(data));

data = [
  new Interval(4, 5),
  new Interval(1, 4)
];
console.log(merge(data));

data = [[2,3],[0,1],[1,2],[3,4],[4,5],[1,1],[0,1],[4,6],[5,7],[1,1],[3,5]]
  .map((theInterval) => {
    return new Interval(theInterval[0], theInterval[1]);
  });
console.log(merge(data));
