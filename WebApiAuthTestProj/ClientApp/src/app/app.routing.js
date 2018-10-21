"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var auth_guard_1 = require("./_guards/auth.guard");
var home_component_1 = require("./home/home.component");
var login_component_1 = require("./login/login.component");
var counter_component_1 = require("./counter/counter.component");
var fetch_data_component_1 = require("./fetch-data/fetch-data.component");
var home_for_login_component_1 = require("./home-for-login/home-for-login.component");
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'counter', component: counter_component_1.CounterComponent },
    { path: 'fetch-data', component: fetch_data_component_1.FetchDataComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'home-for-login', component: home_for_login_component_1.HomeForLoginComponent, canActivate: [auth_guard_1.AuthGuard] },
    // default route
    { path: '**', redirectTo: '' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map