import {Component, OnInit, Inject} from '@angular/core';
import {ROUTER_DIRECTIVES,RouteSegment} from '@angular/router';
import {ObjectEditComponent,ConfigLoader} from 'idai-components-2/idai-components-2';
import {Datastore} from 'idai-components-2/idai-components-2'
import {OBJECTS} from "./sample-objects";



@Component({
    selector: 'object-edit-wrapper',
    templateUrl: 'templates/object-edit-wrapper.html',

    directives: [ ROUTER_DIRECTIVES, ObjectEditComponent ]
})
export class ObjectEditWrapperComponent implements OnInit {

    private id;
    private selectedObject;

    constructor(
        private datastore: Datastore,
        private routeSegment: RouteSegment,
        private configLoader:ConfigLoader) {

        this.id=routeSegment.getParam('id');
    }

    private setConfig(){
        this.configLoader.setProjectConfiguration('config/Configuration.json');
        this.configLoader.setRelationsConfiguration('config/Relations.json');
    }

    ngOnInit() {
        this.loadSampleData();
        
        this.datastore.get(this.id).then((entity)=> {
            this.setConfig();
            this.selectedObject = JSON.parse(JSON.stringify(entity));
        });
    }

    loadSampleData(): void {
        for (var item of OBJECTS) {
            this.datastore.update(item);
        }
    }
}