import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SimpleComponent } from './simple.component';
import { CustomerComponent } from './customer.component';
import { CustomerSimpleFormComponent } from './simpleform/customer.component';
import { CustomerValidComponent } from './datadrivenformvalidation/customer.component';
import { CustomerModelValidComponent } from './datadrivenformmodelvalidation/customer.component';
import { CustomerAssignmentComponent } from './customerassignment/customer.component';
import { PersonService } from './simpleservice/person.service';
import { PersonServiceComponent } from './simpleservice/person.component';

import {routing} from './routingdemo/app.routetable';
import { HomeComponent } from './routingdemo/homecomponent';
import { AboutComponent } from './routingdemo/aboutcomponent';
import { ContactComponent } from './routingdemo/contactcomponent';
import { MainComponent } from './routingdemo/maincomponent';

import {PipeDemoComponent} from './pipesdemo/pipe.component';

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule],
    declarations: [SimpleComponent, CustomerComponent, CustomerSimpleFormComponent,
     CustomerValidComponent, CustomerModelValidComponent,CustomerAssignmentComponent,
     PersonServiceComponent, //HomeComponent, AboutComponent, ContactComponent, MainComponent,
     PipeDemoComponent
     ],
     providers:[PersonService],
    bootstrap: [PipeDemoComponent]
})
export class AppModule {}
platformBrowserDynamic().bootstrapModule(AppModule);