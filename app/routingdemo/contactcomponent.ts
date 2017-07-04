import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'contact-page',
    template: `
    <h2>This is the Contact Component<h2>
    <hr/>
    <h3>{{message}}</h3>`
})
export class ContactComponent implements OnInit {
    message:string;
    constructor() {
        this.message = "Contact Page";
     }

    ngOnInit() { }
}