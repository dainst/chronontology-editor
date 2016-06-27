import {Injectable} from "@angular/core";
import {ValidationInterceptor} from "idai-components-2/idai-components-2";
import {Document} from "idai-components-2/idai-components-2"

/**
 * @author Daniel de Oliveira
 */
@Injectable()
export class AppValidationInterceptor extends ValidationInterceptor {

    validate(document:Document) : string {
        return undefined;
    }
}