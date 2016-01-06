import {Component, OnInit,View} from 'angular2/core';
import {COMMON_DIRECTIVES,NgFor,NgIf} from 'angular2/common';
import {Person} from '../core/person';
import {PeopleService} from './people.service';

@Component({
    selector: 'people'
})
@View({
    templateUrl: './app/people/people.html',
    directives: [COMMON_DIRECTIVES]
})
export class People {
    public people: Array<Person>;

    constructor(private _peopleService: PeopleService) {
        _peopleService.getPeople()
            .subscribe(res => this.people = res);
    }
}