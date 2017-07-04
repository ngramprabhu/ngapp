import { Injectable } from '@angular/core';
import {Persons} from './person.model'

@Injectable()
export class PersonService {
    persons = Persons;
    constructor() { }
    getPerson() {
        return this.persons;
    }
}