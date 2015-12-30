System.register(['angular2/platform/browser', 'angular2/common', 'angular2/router', 'angular2/http', './app', './people/people.service'], function(exports_1) {
    var browser_1, common_1, router_1, http_1, app_1, people_service_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (app_1_1) {
                app_1 = app_1_1;
            },
            function (people_service_1_1) {
                people_service_1 = people_service_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_1.App, [
                router_1.ROUTER_PROVIDERS,
                http_1.HTTP_BINDINGS,
                common_1.FormBuilder,
                people_service_1.PeopleService
            ]);
        }
    }
});
//# sourceMappingURL=bootstrap.js.map