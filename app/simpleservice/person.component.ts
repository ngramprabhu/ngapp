import { Component, OnInit } from '@angular/core';
import {PersonService} from './person.service'

@Component({
    selector: 'person-service',
    template: `<div><button (click)='getPersonsLength()'>Get Length</button>`
})
export class PersonServiceComponent implements OnInit {
    constructor(private serv:PersonService) { }

    ngOnInit() { }

    getPersonsLength() {
        let length = this.serv.getPerson().length;
        alert("Length of Person Data" + length);
    }
}