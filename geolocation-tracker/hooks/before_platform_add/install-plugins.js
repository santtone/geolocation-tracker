#!/usr/bin/env node
 
var pluginlist = [
	"cordova-plugin-crosswalk-webview",
	"https://github.com/apache/cordova-plugin-whitelist",
    "org.apache.cordova.device"
];

var sys = require('sys')
var exec = require('child_process').exec;
 
function puts(error, stdout, stderr) {
    sys.puts(stdout)
}

pluginlist.forEach(function(plug) {
    exec("cordova plugin add " + plug, puts);
});