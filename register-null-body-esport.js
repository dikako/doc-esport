var request = require('request');
var fs = require('fs');
var options = {
  'method': 'POST',
  'url': 'https://rc-api.rctiplus.com/esport/api/v1/register',
  'headers': {
    'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2aWQiOjUxMDcsInRva2VuIjoiYzlmZGM1NGI4NjIxNmNmMyIsInBsIjoibXdlYiIsImRldmljZV9pZCI6ImRpa2Frb2tvIn0.9damNZPZMkmU3D-puzThqmDCSUeYNybMtmCdILqpl4M',
    'Content-Type': 'multipart/form-data'
  },
  formData: {
    'event_id': '',
    'nama': '',
    'telepon': '',
    'email': '',
    'kota': '',
    'alamat': '',
    'nickname': '',
    'id_ml': '',
    'nama_team': '',
    'social_media': '',
    'profil': {
      'value': fs.createReadStream('/path/to/file'),
      'options': {
        'filename': 'filename'
        'contentType': null
      }
    },
    'identitas': {
      'value': fs.createReadStream('/path/to/file'),
      'options': {
        'filename': 'filename'
        'contentType': null
      }
    },
    'discord': '',
    'area': ''
  }
};
request(options, function (error, response) { 
  if (error) throw new Error(error);
  console.log(response.body);
});
