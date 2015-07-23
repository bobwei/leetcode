'use strict';

var compareVersion = function(version1, version2) {
  var mapFunc = function(versionString){
    return parseInt(versionString, 10);
  };
  version1 = version1.split('.').map(mapFunc);
  version2 = version2.split('.').map(mapFunc);

  var n = Math.max(version1.length, version2.length);
  var tmpVersion;
  if (version1.length !== version2.length){
    tmpVersion = (version1.length < version2.length) ? version1 : version2;
    var times = n - tmpVersion.length;
    for ( var i = 0 ; i < times ; i++ ){
      tmpVersion.push(0);
    }
  }

  for ( var j = 0 ; j < n ; j++ ){
    if (version1[j] !== version2[j]){
      return (version1[j] > version2[j]) ? 1 : -1 ;
    }
  }

  return 0;
};

var versions;

versions = ['0.1', '1.2'];
console.log(versions[0], versions[1], compareVersion(versions[0], versions[1]));

versions = ['1.2', '0.1'];
console.log(versions[0], versions[1], compareVersion(versions[0], versions[1]));

versions = ['0.1', '0.1'];
console.log(versions[0], versions[1], compareVersion(versions[0], versions[1]));

versions = ['1', '0.1'];
console.log(versions[0], versions[1], compareVersion(versions[0], versions[1]));

versions = ['1.1', '1'];
console.log(versions[0], versions[1], compareVersion(versions[0], versions[1]));

versions = ['10.6.5', '10.6'];
console.log(versions[0], versions[1], compareVersion(versions[0], versions[1]));

versions = [
  '19.8.3.17.5.01.0.0.4.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0000.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.000000',
  '19.8.3.17.5.01.0.0.4.0.0.0.0.0.0.0.0.0.0.0.0.0.00.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.000000.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.000000'
];
console.log(versions[0], versions[1], compareVersion(versions[0], versions[1]));
