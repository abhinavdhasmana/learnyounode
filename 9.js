/* global process */
var http = require('http');
var bl = require('bl');

var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];
var url_response_1 = "";
var url_response_2 = "";
var url_response_3 = "";
var done_1 = false;
var done_2 = false;
var done_3 = false;

http.get(url1, function (response) {
  response.pipe(bl(function (err, data) {
    done_1 = true;
    if (err)
      return console.error(err);
    url_response_1 = data.toString();
    print_data();
  }));
});


http.get(url2, function (response) {
    done_2 = true;
  response.pipe(bl(function (err, data) {
    if (err)
      return console.error(err);
    url_response_2 = data.toString();
    print_data();
  }));
}); 

http.get(url3, function (response) {
  done_3 = true;
  response.pipe(bl(function (err, data) {
    if (err)
      return console.error(err);
    url_response_3 = data.toString();
    print_data();
    
  }));
});

function print_data() {
  if ((done_1 == true) && (done_2 == true) && (done_3 == true))
  {
    console.log(url_response_1);
    console.log(url_response_2);
    console.log(url_response_3);
  }
}
  
  

