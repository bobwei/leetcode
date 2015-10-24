'use strict';

import * as testService from './testModule';

testService
  .findAll()
  .then(function(results) {
    console.log(results);
  });
