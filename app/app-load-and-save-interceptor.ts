import {Injectable} from "@angular/core";
import {LoadAndSaveInterceptor} from "idai-components-2/idai-components-2";
import {Entity} from "idai-components-2/idai-components-2"

/**
 * @author Daniel de Oliveira
 */
@Injectable()
export class AppLoadAndSaveInterceptor extends LoadAndSaveInterceptor {

    interceptLoad(object:Entity) : Entity {
        object.type='Period';
        return object;
    }

    interceptSave(object:Entity) : Entity {
        var newO = <Entity>JSON.parse(JSON.stringify(object));
        
        delete newO.type;
        delete newO['@id'];
        return newO;
    }
}