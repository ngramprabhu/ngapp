import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'about-page',
    template: `
    <h2>This is the About Component<h2>
    <hr/>
    <h3>{{message}}</h3>`
})
export class AboutComponent implements OnInit {
    message:string;
    constructor() {
        this.message = "About Page";
     }

    ngOnInit() { }
}