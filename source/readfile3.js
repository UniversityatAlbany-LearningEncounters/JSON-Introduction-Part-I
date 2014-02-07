var fs = require('fs');

fs.readFile('movie.json', 'utf8', function (err,input) {

  if (err) {
    console.log('Error: ' + err);
    return;
  }

  var data = JSON.parse(input);

  console.log( JSON.stringify(data,null,2) );

});

