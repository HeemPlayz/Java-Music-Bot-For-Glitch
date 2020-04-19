const express = require('express');
const app = express();
app.use(express.static('public'));
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html'); 
});

const https = require('https');
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  https.get(`https://${PROJECT_NAME}.glitch.me/`);
}, 280000);

var shell = require('shelljs');
  
shell.exec('java -jar JMusicBot-0.2.8.jar')
