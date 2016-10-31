var Agent = require('socks5-https-client/lib/Agent');
var request = require('request');
var config = require('./config/config.json');

request({
    url: 'https://encrypted.google.com/',
    agentClass: Agent,
    strictSSL: true,
    agentOptions: {
        socksHost: config.sockConfig.host,
        socksPort: config.sockConfig.port
    }
}, function(err, res) {
    console.log(err || res.body);
});