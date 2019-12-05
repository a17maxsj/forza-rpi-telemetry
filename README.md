
### Edit these settings within the HUD section of Forza Motorsport 7
* Set ip to: Your raspberry pi's IP
* Set port to: 35553
* Data out packet format: Dash


### On your raspberry pi
**Clone the pacakge onto your raspberry pi**

$ git clone https://github.com/a17maxsj/forza-rpi-telemetry.git
 
**Install node.js and initialize npm, then download the required LCD library**

$ npm install lcd

Depending on which pins you have attached to the LCD display you might have to change th *rs*,*e* and *data pins*. Might extend the guide to include this at a later date.

**Running the program** 

$ node RPi-server.js

The program should now start and the console should log that we are listnening for data and that the RPi is broadcasting data to the LCD. Let me know of any errors or suggestions.
![working](https://i.gyazo.com/3809bb7864694951efc8a49b953320b8.png)




