import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import { Routes, APP_ROUTES } from './routes.config';


@Component({
    selector: 'app',
    templateUrl: './app/app.html',
    styleUrls: ['./app/app.css'],
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig(APP_ROUTES) 
export class App {
    public routes = Routes;
}

