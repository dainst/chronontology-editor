import {Component, OnInit, Inject} from '@angular/core';
import { Router,ROUTER_DIRECTIVES, Routes } from '@angular/router';
import {ObjectEditWrapperComponent} from './object-edit-wrapper.component';

/**
 * @author Daniel de Oliveira
 */
@Component({
    selector: 'idai-components-demo-app',
    templateUrl: 'templates/app.html',
    directives: [ROUTER_DIRECTIVES]
})
@Routes([
    {path: '/edit', component: ObjectEditWrapperComponent},
])
export class AppComponent {
    
}