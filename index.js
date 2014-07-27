var Hapi = require('hapi');

var server = new Hapi.Server('0.0.0.0', 8080);

server.route({
  method: 'GET',
  path: '/',
  handler: function (request, reply) {
    console.log('got it!');
    reply('got it!');
  }
});

server.start();
