var Agent = require('socks5-http-client/lib/Agent');
var request = require('request');
var config = require('./config/config.json');

request({
    url: 'http://ipinfo.io/',
    agentClass: Agent,
    agentOptions: {
        socksHost: config.sockConfig.host,
        socksPort: config.sockConfig.port
    }
}, function(err, res) {
    console.log(err || res.body);
});