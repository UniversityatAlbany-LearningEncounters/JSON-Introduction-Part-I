var fs = require('fs');

var filename= process.argv[2];

fs.readFile(filename, 'utf8', function (err,input) {

  if (err) {
    console.log('Error: ' + err);
    return;
  }

  var data = JSON.parse(input);

  console.log( JSON.stringify(data,null,2) );

});

