import {Component} from 'angular2/core';
import {COMMON_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {RouteParams, Router} from 'angular2/router';
import {Person} from '../core/person';
import {PeopleService} from './people.service';

@Component({
	selector: 'person-detail',
	templateUrl: './app/people/person.html',
	directives: [COMMON_DIRECTIVES, FORM_DIRECTIVES],
	inputs: ['person']
})
export class PersonDetail{
	public person: Person;

	constructor(private _peopleService: PeopleService,
		private _routeParams : RouteParams, private _router: Router) {
		let id = +this._routeParams.get('id');
		_peopleService.getPerson(id)
			.subscribe(res => this.person = res);
	}
}
