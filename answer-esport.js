var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://rc-api.rctiplus.com/esport/api/v1/answer',
  'headers': {
    'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2aWQiOjU0MTgsInRva2VuIjoiN2M3ZTg2Yjg2ZmI5NjlmNiIsInBsIjoibXdlYiIsImRldmljZV9pZCI6IjEifQ.obwZni3NU0JlbA1-wZ6ma2VzuGckhjbLIoLE_iFFFkA',
    'Content-Type': ['application/json', 'text/plain']
  },
  body: "{\n    \"event_id\": 8,\n    \"question_id\": 10,\n    \"answer\": \"8\"\n}"

};
request(options, function (error, response) { 
  if (error) throw new Error(error);
  console.log(response.body);
});
