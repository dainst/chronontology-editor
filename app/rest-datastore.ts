import {Document} from "idai-components-2/idai-components-2";
import {Datastore} from "idai-components-2/idai-components-2";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Http} from '@angular/http';

/**
 * @author Daniel de Oliveira
 */
@Injectable()
export class RestDatastore implements Datastore {

    constructor(private http:Http) { }

    public getUnsyncedObjects(): Observable<Document> {
        return undefined;
    }

    // not yet implemented
    public create(doc:Document):Promise<string> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }

    /**
     * NOT IMPLEMENTED
     * @returns {undefined}
     */
    public documentChangesNotifications():Observable<Document> {
        return undefined;
    }

    /**
     * @param doc
     * @returns {Promise<T>}
     */
    public update(doc:Document):Promise<any> {

        const resourceId = doc.resource.id;

        return new Promise((resolve, reject) => {

            this.http.put("/data/period/" + resourceId,JSON.stringify(doc))
                .subscribe(
                    data => {
                        resolve()
                    },
                    err => {
                        reject(err);
                    }
                );
        });
    }

    // TODO check if this method gets ever used (check all usages of Datastore.refresh).
    public refresh(id:string):Promise<Document>  {
        return this.fetchObjectViaHttp(id);
    }

    public get(resourceId:string):Promise<Document> {
        return this.fetchObjectViaHttp(resourceId);
    }

    public remove(id:string):Promise<any> {
        return new Promise((resolve, reject) => {
           resolve();
        });
    }

    public clear():Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }


    /**
     * TODO currently works for query strings which are resource ids.
     * A full implementation is possible when jeremy fully supports partial search queries.
     *
     * @param query
     * @returns {Promise<T>}
     */
    public find(query:string):Promise<Document[]> {

        return new Promise((resolve, reject) => {

            this.fetchObjectViaHttp(query).then(
                (document)=>resolve([document]),
                (err)=>reject(err)
            );
        });
    }

    public all():Promise<Document[]> {

        return new Promise<Document[]>((resolve, reject) => {
            resolve();
        });
    }

    private fetchObjectViaHttp(resourceId:string): Promise<Document> {

        return new Promise((resolve, reject) => {

            var url = "data/period/";

            this.http.get(url+resourceId)
                .subscribe(
                    data => {
                        var document = JSON.parse(data['_body']);
                        document.resource.type="Period";
                        resolve(document)
                    },
                    err => {
                        reject(err);
                    }
                );
        });
    }
}
