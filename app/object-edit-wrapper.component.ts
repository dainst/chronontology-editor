import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Datastore} from "idai-components-2/datastore";
import {Messages} from "idai-components-2/messages";
import {PersistenceManager} from "idai-components-2/persist";
import {ConfigLoader} from "idai-components-2/configuration";
import {M} from "./m";

/**
 * @author: Daniel de Oliveira
 */
@Component({
    moduleId: module.id,
    selector: 'object-edit-wrapper',
    templateUrl: '../templates/object-edit-wrapper.html'
})
export class ObjectEditWrapperComponent implements OnInit {

    private id;
    private selectedDocument;

    constructor(
        private datastore: Datastore,
        private route: ActivatedRoute,
        private configLoader: ConfigLoader,
        private persistenceManager: PersistenceManager,
        private messages: Messages) {

        this.id = this.route.snapshot.params['id'];
    }

    private setConfig() {
        this.configLoader.load('config/Configuration.json',[],[]);
    }

    ngOnInit() {
        this.datastore.get(this.id).then((document)=> {
            this.setConfig();
            this.selectedDocument = JSON.parse(JSON.stringify(document));
        });
    }

    public save(doc) {
        this.persistenceManager.persist(doc).then(()=>{
            console.log("success");
            this.messages.add(M.SAVE_SUCCESS);
        },(err)=>{
            console.error("err ",err);
            this.messages.add(err);
        });
    }
}