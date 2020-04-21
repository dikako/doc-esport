var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://rc-api.rctiplus.com/esport/api/v1/event/8',
  'headers': {
    'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2aWQiOjUxMDcsInRva2VuIjoiMGRjZmQyYjM0NmQ2MjRjMCIsInBsIjoibXdlYiIsImRldmljZV9pZCI6ImRpa2Frb2tvIn0.qHlzf8wHjVk9Fk-uxy73iwtEhkQsaz7bXplCn0EtHCI'
  }
};
request(options, function (error, response) { 
  if (error) throw new Error(error);
  console.log(response.body);
});
