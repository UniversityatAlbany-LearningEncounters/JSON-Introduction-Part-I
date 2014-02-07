var fs = require('fs');

fs.readFile('movie.json', 'utf8', function (err,input) {

  var data = JSON.parse(input);

  console.log( JSON.stringify(data,null,2) );

});

