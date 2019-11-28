var PORT = 35553;
var HOST = '0.0.0.0';

var dgram = require('dgram');
var server = dgram.createSocket('udp4');

let obj = {};

server.on('listening', function () {
    var address = server.address();
    console.log('UDP Server listening on ' + address.address + ":" + address.port);
});

server.on('message', function (message, remote) {



    console.clear();

    //Read rpm and round of decimals
    var currentRpm =~~ message.readFloatLE(16);

    console.log("rpm: " + currentRpm);
  
    
});

server.bind(PORT, HOST);


