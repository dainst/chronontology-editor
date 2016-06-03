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

    private static PROJECT_CONFIGURATION_PATH = 'config/Configuration.json';
    private static RELATIONS_CONFIGURATION_PATH = 'config/Relations.json';
    
    private id;
    private selectedObject;
    private projectConfiguration;
    private relationsConfiguration;

    constructor(
        private configLoader:ConfigLoader,
        private datastore: Datastore,
        private routeSegment: RouteSegment) {

        this.id=routeSegment.getParam('id');
    }


    ngOnInit() {
        this.loadSampleData();

        var promises = [];
        promises.push(this.configLoader.getProjectConfiguration(ObjectEditWrapperComponent.PROJECT_CONFIGURATION_PATH));
        promises.push(this.configLoader.getRelationsConfiguration(ObjectEditWrapperComponent.RELATIONS_CONFIGURATION_PATH));

        Promise.all(promises).then(configs=>{

            this.projectConfiguration=configs[0];
            this.relationsConfiguration=configs[1];

            this.datastore.get(this.id).then((entity)=> {
                this.selectedObject = JSON.parse(JSON.stringify(entity));
            });

        }, (errs)=>{console.error('errs: ',errs)});
    }

    loadSampleData(): void {
        for (var item of OBJECTS) {
            this.datastore.update(item);
        }
    }
}