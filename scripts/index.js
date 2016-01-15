function helloWorld(){
  'use strict';
  console.log('Hello World'); //JSHint should fail here since we got no semicolon
}

function helloArbitrary(data){
  'use strict';
  console.log('Hello ' + data + '!');
}

helloWorld();
helloArbitrary('You');
