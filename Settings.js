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
    DOMAIN: '',
    PORT: 3000,
    DB_TYPES: DB_TYPES.POSTGRES,
    DB_CONN_STRING: "",
    SESSION_SECRET: process.env.EXPRESS_SESSION_SECRET,
    BASE_URL: "/api/v1",
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
