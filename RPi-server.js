
var PORT = 35553;
var HOST = '0.0.0.0';

var dgram = require('dgram');
var server = dgram.createSocket('udp4');
var currentRpm = 0;
var speed = 0;
var gear = 0;


//Initialize the lcd
var Lcd = require('lcd'), lcd = new Lcd({  rs: 26,  e: 19, data: [13, 6, 5, 11],  cols: 16, rows: 2 });

server.on('listening', function() {
    var address = server.address();
    console.log('> UDP Server listening on ' + address.address + ":" + address.port);});

server.on('message', function(message, remote) {

    currentRpm = ~~ message.readFloatLE(16);
    speed =message.readFloatLE(244) * 3.6;
    speed= ~~ speed;
    gear = message.readUInt8(307);
});
server.bind(PORT, HOST);


lcd.on('ready', function() {
        console.log('> RPi broadcasting data to LCD' + '\n' + '> CTRL + C to exit' );
    setInterval(function() {
        lcd.clear();
        lcd.setCursor(0, 0);
        if (gear === 0){
                lcd.print('RPM:' + currentRpm + ' Gear:R');

        }else{
                lcd.print('RPM:' + currentRpm + ' Gear:' + gear);

        }
        lcd.once('printed', function() {
            lcd.setCursor(0, 1);
            lcd.print('Speed:' + speed + 'km/h');

        });

    }, 100);
});

