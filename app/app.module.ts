import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {IdaiComponents2Module, Datastore, ReadDatastore, Messages, ConfigLoader, MD, PersistenceManager,
    DocumentEditChangeMonitor} from 'idai-components-2/idai-components-2';
import {routing} from './app.routing';
import {M} from './m';
import {AppComponent} from './app.component';
import {ObjectEditWrapperComponent} from './object-edit-wrapper.component';
import {RestDatastore} from './rest-datastore';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        IdaiComponents2Module,
        routing
    ],
    declarations: [
        AppComponent,
        ObjectEditWrapperComponent
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        { provide: Datastore, useClass: RestDatastore },
        { provide: ReadDatastore, useExisting: Datastore },
        Messages,
        ConfigLoader,
        PersistenceManager,
        DocumentEditChangeMonitor,
        { provide: MD, useClass: M }
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }