const {Sequelize, Model} = require('sequelize');
const {unset, clone, isArray} = require('lodash');
const {
    dbName,
    host,
    port,
    user,
    password
} = require('../config/config').database;

const sequelize = new Sequelize(dbName, user, password, {
    dialect: 'mysql',
    host,
    port,
    logging:true,

    timezone:'+08:00',
    define:{
        
    }
})