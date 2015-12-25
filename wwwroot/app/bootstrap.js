System.register(['angular2/angular2', 'angular2/router', 'angular2/http', './app', './people/people.service'], function(exports_1) {
    var ng, router, http_1, app_1, people_service_1;
    return {
        setters:[
            function (ng_1) {
                ng = ng_1;
            },
            function (router_1) {
                router = router_1;
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
            ng.bootstrap(app_1.App, [
                router.ROUTER_PROVIDERS,
                http_1.HTTP_BINDINGS,
                ng.FormBuilder,
                people_service_1.PeopleService
            ]);
        }
    }
});
