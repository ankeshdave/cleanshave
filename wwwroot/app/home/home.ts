import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {Router} from 'angular2/router';
import {Routes} from '../routes.config';

@Component({
	selector: 'home',
	templateUrl: './app/home/home.html',
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class Home{

	constructor(private _router: Router) {
	}

    goToPeople(){
        this._router.navigate([`/${Routes.people.name}`, {}]);
    }

}