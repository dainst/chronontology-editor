import {Injectable} from "@angular/core";
import {ValidationInterceptor} from "idai-components-2/idai-components-2";
import {Resource} from "idai-components-2/idai-components-2"

/**
 * @author Daniel de Oliveira
 */
@Injectable()
export class AppValidationInterceptor extends ValidationInterceptor {

    validate(resource:Resource) : string {
        return undefined
    }
}