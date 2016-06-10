import {Injectable} from "@angular/core";
import {LoadAndSaveInterceptor} from "idai-components-2/idai-components-2";
import {Entity} from "idai-components-2/idai-components-2"

/**
 * @author Daniel de Oliveira
 */
@Injectable()
export class AppLoadAndSaveInterceptor extends LoadAndSaveInterceptor {

    interceptLoad(object:Entity) : string {
        object.type='Period';
        return undefined;
    }

    interceptSave(object:Entity) : string {
        // delete object.type;
        // delete object['@id'];
        return undefined;
    }
}