System.register(['angular2/angular2', 'angular2/router', './routes.config'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var ng, router, routes_config_1;
    var App;
    return {
        setters:[
            function (ng_1) {
                ng = ng_1;
            },
            function (router_1) {
                router = router_1;
            },
            function (routes_config_1_1) {
                routes_config_1 = routes_config_1_1;
            }],
        execute: function() {
            App = (function () {
                function App() {
                    this.routes = routes_config_1.Routes;
                }
                App = __decorate([
                    ng.Component({
                        selector: 'app', templateUrl: './app/app.html',
                        styleUrls: ['./app/app.css'],
                        directives: [router.ROUTER_DIRECTIVES]
                    }),
                    router.RouteConfig(routes_config_1.APP_ROUTES), 
                    __metadata('design:paramtypes', [])
                ], App);
                return App;
            })();
            exports_1("App", App);
        }
    }
});
