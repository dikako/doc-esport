var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://rc-api.rctiplus.com/esport/api/v1/unique_code',
  'headers': {
    'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2aWQiOjUxMDcsInRva2VuIjoiYzlmZGM1NGI4NjIxNmNmMyIsInBsIjoibXdlYiIsImRldmljZV9pZCI6ImRpa2Frb2tvIn0.9damNZPZMkmU3D-puzThqmDCSUeYNybMtmCdILqpl4M',
    'Content-Type': ['application/json', 'text/plain']
  },
  body: "{\r\n  \"unique_code\": \"gshags\",\r\n  \"event_id\": 8\r\n}"

};
request(options, function (error, response) { 
  if (error) throw new Error(error);
  console.log(response.body);
});
