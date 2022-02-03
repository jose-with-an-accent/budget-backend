"use strict";
exports.__esModule = true;
require("dotenv/config");
var plaid_1 = require("plaid");
var DB_TYPES;
(function (DB_TYPES) {
    DB_TYPES[DB_TYPES["POSTGRES"] = 0] = "POSTGRES";
    DB_TYPES[DB_TYPES["SQLITE"] = 1] = "SQLITE";
})(DB_TYPES || (DB_TYPES = {}));
var SETTINGS = {
    USER_STORE: {
        findByUsername: function (username) { return ({
            id: 1,
            name: 'Jose',
            email: 'josersanchez0117@gmail.com',
            validatePassword: function (password) { return true; }
        }); }
    },
    DOMAIN: '',
    DB_TYPES: DB_TYPES.POSTGRES,
    DB_CONN_STRING: "",
    SESSION_SECRET: process.env.EXPRESS_SESSION_SECRET,
    PLAID_INTEGRATION: new plaid_1.Configuration({
        basePath: plaid_1.PlaidEnvironments.sandbox,
        baseOptions: {
            headers: {
                CLIENT_ID: '',
                SECRET: process.env.EXPRESS_SESSION_SECRET
            }
        }
    })
};
exports["default"] = SETTINGS;
