'use strict';
const server = require('./server');
const winston = require('winston');
var ds = server.dataSources.db;
var lbTables = ['AppUser', 'AccessToken', 'ACL', 'RoleMapping', 'Role'];
ds.automigrate(lbTables, function (er) {
    if (er) throw er;
    winston.info('Loopback tables [' + lbTables + '] created in ', ds.adapter.name);
    ds.disconnect();
});
