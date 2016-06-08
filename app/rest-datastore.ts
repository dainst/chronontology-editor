import {Entity} from "idai-components-2/idai-components-2";
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

    private static IDAIFIELDOBJECT = 'idai-field-object';
    private static FULLTEXT = 'fulltext';

    private db: Promise<any>;
    private observers = [];
    private objectCache: { [id: string]: Entity } = {};

    public getUnsyncedObjects(): Observable<Entity> {
        return undefined;
    }
    
    public create(object:Entity):Promise<string> {

        return new Promise((resolve, reject) => {
            resolve();
        });
    }

    public update(entity:Entity):Promise<any> {
        this.objectCache[entity.id]=entity;
        return new Promise((resolve, reject) => {
            resolve();
        });
    }

    public refresh(id:string):Promise<Entity>  {

        return this.fetchObject(id);
    }

    public get(id:string):Promise<Entity> {

        if (this.objectCache[id]) {
            console.log("get cached object")
            return new Promise((resolve, reject) => resolve(this.objectCache[id]));
        } else {
            console.log("fetch object")
            return this.fetchObject(id);
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

    
    public find(query:string):Promise<Entity[]> {

        query = query.toLowerCase();

        var results : Entity[] = [];
        for (var i in this.objectCache) {
            if (this.objectCache[i].identifier.indexOf(query)!=-1) results.push(this.objectCache[i]);
        }
        console.log("results ",results)

        return new Promise((resolve, reject) => {
            resolve(results);
        });
    }

    public all():Promise<Entity[]> {

        return new Promise<Entity[]>((resolve, reject) => {
            resolve();
        });
    }

    private fetchObject(id:string): Promise<Entity> {

        return new Promise((resolve, reject) => {

            var url= "data";
            if (id.indexOf("period")==-1)
                url= "data/period/"

            this.http.get(url+id)
                .subscribe(
                    data => {
                        var d=JSON.parse(data['_body']);
                        d['resource'].type='Period';
                        d['resource'].id=d['@id'];
                        
                        var r = d['resource'];
                        console.log("r",r);
                        resolve(r)
                    },
                    err => console.error(err)
                );


        });
    }

    private saveObject(object:Entity):Promise<any> {

        return new Promise((resolve, reject) => {
            resolve();
        });
    }

    private saveFulltext(object:Entity):Promise<any> {

        return new Promise((resolve, reject) => {
            resolve();
        })
    }
}
