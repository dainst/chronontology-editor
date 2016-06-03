import {Component, OnInit, Inject} from '@angular/core';
import {ROUTER_DIRECTIVES,RouteSegment} from '@angular/router';
import {ObjectEditComponent} from 'idai-components-2/idai-components-2';
import {ConfigLoader} from 'idai-components-2/idai-components-2'
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
    private projectConfiguration;

    constructor(
        private configLoader:ConfigLoader,
        private datastore: Datastore,
        private routeSegment: RouteSegment) {

        this.id=routeSegment.getParam('id');
    }


    ngOnInit() {
        this.loadSampleData();

        this.configLoader.getProjectConfiguration().then(pc=>{
           this.projectConfiguration=pc;

            console.log("ID: "+this.id);
            this.datastore.get(this.id).then((entity)=> {
                this.selectedObject = JSON.parse(JSON.stringify(entity));
            });
        });
    }

    loadSampleData(): void {
        for (var item of OBJECTS) {
            this.datastore.update(item);
        }
    }
}