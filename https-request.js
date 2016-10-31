var Agent = require('socks5-https-client/lib/Agent');
var request = require('request');
var config = require('./config/config.json');

request({
    url: 'https://encrypted.google.com/', // Https url
    agentClass: Agent, // Broswer agent
    method: 'GET', // Methods type (POST, PUT, DELETE)
    strictSSL: true,
    agentOptions: {
        socksHost: config.sockConfig.host, // Host set in config file.
        socksPort: config.sockConfig.port  // Port set in config file.
    }
}, function(err, res) {
    console.log(err || res.body);
});