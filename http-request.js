var Agent = require('socks5-http-client/lib/Agent');
var request = require('request');
var config = require('./config/config.json');

request({
    url: 'http://ipinfo.io/', // Url we are going to make request.
    agentClass: Agent, // User-Agents for browser use.
    method: 'GET', // Update method
    agentOptions: {
        socksHost: config.sockConfig.host, // Host set in config file.
        socksPort: config.sockConfig.port  // Port set in config file.
    }
}, function(err, res) {
    // Getting response anonymously.
    console.log(err || res.body);
});