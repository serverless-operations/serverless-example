'use strict';

module.exports.hello = async event => {
  return {
    source: 'test.action'
  };
};


module.exports.success = async event => {
  console.log(event);
};
  
module.exports.fail = async event => {
  console.log(event);
};
    