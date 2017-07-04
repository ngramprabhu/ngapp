import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'main-page',
    template:`<h1>The Routing App Main Page</h1>
    <div class="collapse navbar-collapse">
        <ul>
           <li><a class="btn btn-link" [routerLink]="['']">Home</a></li>
           <li><a class="btn btn-link" [routerLink]="['about']">About</a></li>
           <li><a class="btn btn-link" [routerLink]="['contact']">Contact</a></li>
        </ul>
    </div>    
    <router-outlet></router-outlet>`
})
export class MainComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}