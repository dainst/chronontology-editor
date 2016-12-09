import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import {DocumentEditChangeMonitor,IdaiDocumentsModule} from 'idai-components-2/documents';
import {ConfigLoader} from 'idai-components-2/configuration';
import {PersistenceManager} from 'idai-components-2/persist';
import {Messages, MD, IdaiMessagesModule} from 'idai-components-2/messages';
import {Datastore, ReadDatastore} from 'idai-components-2/datastore';

import {routing} from './app.routing';
import {M} from './m';
import {AppComponent} from './app.component';
import {ObjectEditWrapperComponent} from './object-edit-wrapper.component';
import {RestDatastore} from './rest-datastore';

@NgModule({
    imports: [
        IdaiDocumentsModule,
        IdaiMessagesModule,
        BrowserModule,
        FormsModule,
        HttpModule,
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