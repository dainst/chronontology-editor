import {Component} from '@angular/core';
import { ROUTER_DIRECTIVES, Routes } from '@angular/router';
import {ObjectEditWrapperComponent} from './object-edit-wrapper.component';
import {MessagesComponent} from 'idai-components-2/idai-components-2'

/**
 * @author Daniel de Oliveira
 */
@Component({
    selector: 'idai-components-demo-app',
    templateUrl: 'templates/app.html',
    directives: [ROUTER_DIRECTIVES,MessagesComponent]
})
@Routes([
    {path: '/edit/:id', component: ObjectEditWrapperComponent},
])
export class AppComponent {
    constructor() {}
}