'use strict';

module.exports.purchase = async (event) => {
  console.log("==EXECUTING PURCHASE:",event);
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'This is your purchase of $10.00',
      input: event,
    }),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports.refund = async (event) => {
  console.log("==EXECUTING REFUND:",event);
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'This is your refund of $5.00',
      input: event,
    }),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
