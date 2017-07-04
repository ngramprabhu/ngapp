import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'home-page',
    template: `
    <h2>This is the Home Component<h2>
    <hr/>
    <h3>{{message}}</h3>`
})
export class HomeComponent implements OnInit {
    message:string;
    constructor() {
        this.message = "Home Page";
     }

    ngOnInit() { }
}