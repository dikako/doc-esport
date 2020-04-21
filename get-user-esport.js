var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://rc-api.rctiplus.com/esport/api/v1/user',
  'headers': {
    'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2aWQiOjUyMzAsInRva2VuIjoiNmU2ODQyMTdkMGQ1MjUzOCIsInBsIjoiYW5kcm9pZCIsImRldmljZV9pZCI6IjQ0NDQifQ.oaQV33n0K8YWCoBHGhN_RYUEzvhhewiVKRwi8GCIHOc'
  }
};
request(options, function (error, response) { 
  if (error) throw new Error(error);
  console.log(response.body);
});
