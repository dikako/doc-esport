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
    'event_id': '6',
    'nama': 'dikakoko ',
    'telepon': '0822788',
    'email': 'dikakoko04@gmail.com',
    'kota': 'Bandar Lampung',
    'alamat': 'Gang Falimly 5',
    'nickname': 'dikakoko',
    'id_ml': '99812871(2121)',
    'nama_team': '1945s',
    'social_media': '{"instagram":"https://www.instagram.com/dikako_ko/","twitter":"https://twitter.com/KoDikako"}',
    'profil': {
      'value': fs.createReadStream('/C:/Users/fransiskus.setiawan/Desktop/1.jpg'),
      'options': {
        'filename': '/C:/Users/fransiskus.setiawan/Desktop/1.jpg',
        'contentType': null
      }
    },
    'identitas': {
      'value': fs.createReadStream('/C:/Users/fransiskus.setiawan/Desktop/1.jpg'),
      'options': {
        'filename': '/C:/Users/fransiskus.setiawan/Desktop/1.jpg',
        'contentType': null
      }
    },
    'discord': 'bebas',
    'area': 'jabodetabek'
  }
};
request(options, function (error, response) { 
  if (error) throw new Error(error);
  console.log(response.body);
});
