'use strict';

export function findAll() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([{
        id: 1,
        name: 'Bob'
      }, {
        id: 2,
        name: 'Heidi'
      }]);
    }, 3000);
  });
}
