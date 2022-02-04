"use strict";
exports.__esModule = true;
var plaid_1 = require("plaid");
var Settings_1 = require("../Settings");
console.log("Plaid Explorer");
// const req: AccountsGetRequest = {
// 	  client_id: '619a9b5029a9d0001c6e24a5',
// }
var client = new plaid_1.PlaidApi(Settings_1["default"].PLAID_INTEGRATION);
try {
    var response = await client.accountsGet(client);
    console.log(response);
}
catch (e) {
    console.error(e);
}
