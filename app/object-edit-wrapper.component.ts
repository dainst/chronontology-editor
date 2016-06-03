import {Component, OnInit, Inject} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {ObjectEditComponent} from 'idai-components-2/idai-components-2';
import {ConfigLoader} from 'idai-components-2/idai-components-2'
import {Datastore} from 'idai-components-2/idai-components-2'
import {OBJECTS} from "idai-components-2/idai-components-2";

@Component({
    selector: 'object-edit-wrapper',

    templateUrl: 'templates/object-edit-wrapper.html',

    directives: [ ROUTER_DIRECTIVES, ObjectEditComponent ]
})
export class ObjectEditWrapperComponent implements OnInit {

    private selectedObject;
    private projectConfiguration;

    constructor(
        private configLoader:ConfigLoader,
        private datastore: Datastore) {
    }

    public clicked(id) {
        this.datastore.get(id).then((entity)=> {
            this.selectedObject = JSON.parse(JSON.stringify(entity));
        });
    }

    ngOnInit() {
        this.loadSampleData();

        this.configLoader.getProjectConfiguration().then(pc=>{
           this.projectConfiguration=pc;
        });
    }

    loadSampleData(): void {
        this.selectedObject={}
        this.selectedObject['identifier']='ob1';
        this.selectedObject['title']='Obi One Kenobi';
        this.selectedObject['id']='1';
        this.selectedObject['type']='Object';
    }
}