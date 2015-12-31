import 'rxjs/Rx';
import {bootstrap} from 'angular2/platform/browser';
import { Component,enableProdMode } from 'angular2/core';
import { FormBuilder } from 'angular2/common';
import { ROUTER_PROVIDERS} from 'angular2/router';
import { Http, HTTP_BINDINGS } from 'angular2/http';
import { App } from './app';
import { PeopleService } from './people/people.service';

bootstrap(App, [
    ROUTER_PROVIDERS,
    HTTP_BINDINGS,
    FormBuilder,
    PeopleService
    ]);
