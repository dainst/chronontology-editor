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

    private db: Promise<any>;
    private docCache: { [id: string]: Document } = {};

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
     * @param doc
     * @returns {Promise<T>}
     */
    public update(doc:Document):Promise<any> {

        const resourceId=doc['resource']['@id'];

        return new Promise((resolve, reject) => {

            this.http.put("/data"+resourceId,JSON.stringify(doc))
                .subscribe(
                    data => {
                        this.docCache[resourceId]=doc;
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

        if (this.docCache[resourceId]) {
            return new Promise((resolve, reject) => resolve(this.docCache[resourceId]));
        } else {
            return this.fetchObjectViaHttp(resourceId);
        }
    }

    public remove(id:string):Promise<any> {
        return new Promise((resolve, reject) => {
            this.db.then(db => {
               resolve();
            });
        });
    }

    public clear():Promise<any> {
        return new Promise((resolve, reject) => {
            this.db.then(db => {
                resolve();
            });
        });
    }


    // TODO implement find via http
    public find(query:string):Promise<Document[]> {

        query = query.toLowerCase();

        var results : Document[] = [];
        for (var i in this.docCache) {
            if (this.docCache[i]['resource']['@id'].indexOf(query)!=-1) results.push(this.docCache[i]);
        }
        console.log("results ",results)

        return new Promise((resolve, reject) => {
            resolve(results);
        });
    }

    public all():Promise<Document[]> {

        return new Promise<Document[]>((resolve, reject) => {
            resolve();
        });
    }

    private fetchObjectViaHttp(resourceId:string): Promise<Document> {

        return new Promise((resolve, reject) => {

            var url= "data";

            this.http.get(url+resourceId)
                .subscribe(
                    data => {
                        var document=JSON.parse(data['_body']);
                        document['resource'].type="Period";
                        document['resource']['@id']=document['@id'];
                        resolve(document)
                    },
                    err => console.error(err)
                );


        });
    }

    private saveObject(doc:Document):Promise<any> {

        return new Promise((resolve, reject) => {
            resolve();
        });
    }

    private saveFulltext(doc:Document):Promise<any> {

        return new Promise((resolve, reject) => {
            resolve();
        })
    }
}
