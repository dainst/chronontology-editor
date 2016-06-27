import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES,RouteSegment} from '@angular/router';
import {DocumentEditComponent,ConfigLoader} from 'idai-components-2/idai-components-2';
import {Datastore} from 'idai-components-2/idai-components-2'
import {SaveService} from 'idai-components-2/idai-components-2'
import {Messages} from "idai-components-2/idai-components-2";
import {M} from "./m";

/**
 * @author: Daniel de Oliveira
 */
@Component({
    selector: 'object-edit-wrapper',
    templateUrl: 'templates/object-edit-wrapper.html',

    directives: [ ROUTER_DIRECTIVES, DocumentEditComponent ]
})
export class ObjectEditWrapperComponent implements OnInit {

    private id;
    private selectedDocument;

    constructor(
        private datastore: Datastore,
        private routeSegment: RouteSegment,
        private configLoader: ConfigLoader,
        private saveService: SaveService,
        private messages: Messages) {

        this.id=routeSegment.getParam('id');
    }

    private setConfig(){
        this.configLoader.setProjectConfiguration('config/Configuration.json');
        this.configLoader.setRelationsConfiguration('config/Relations.json');
    }

    ngOnInit() {
        this.datastore.get("/period/"+this.id).then((document)=> {
            this.setConfig();
            this.selectedDocument = JSON.parse(JSON.stringify(document));
        });
    }

    public save(doc) {
        this.saveService.save(doc).then(()=>{
            console.log("success");
            this.messages.add(M.SAVE_SUCCESS);
        },(err)=>{
            console.error("err ",err);
            this.messages.add(err);
        });
    }
}