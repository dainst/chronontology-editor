import {Injectable} from "@angular/core";
import {Message} from "idai-components-2/idai-components-2"
/**
 * This map contains the message bodies
 * messages identified by their key.
 * It can be replaced later by another data source
 * like an external service.
 *
 * @author Daniel de Oliveira
 * @author Jan G. Wieners
 */
@Injectable()
export class M { // = Messages Dictionary. 
  // For reasons of brevity of calls to it just "M".

    public static SAVE_SUCCESS : string = 'objectlist/savesuccess';

    public msgs : { [id: string]: Message } = {};

    constructor() {
        this.msgs[M.SAVE_SUCCESS]={
            content: 'Das Objekt wurde erfolgreich gespeichert.',
            level: 'success'
        };
    }
}