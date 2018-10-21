"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.apiUrl = 'http://localhost:1411';
    }
    UserService.prototype.getUsers = function () {
        return this.http
            .get(this.apiUrl + "/users");
    };
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map