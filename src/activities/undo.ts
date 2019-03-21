import { Activity, Activities } from "./activity";
import { Actor } from "../actors/actor";

/**
 * https://www.w3.org/TR/activitystreams-vocabulary/#dfn-undo
 */
export class Undo implements Activity {
    public readonly type = Activities.UNDO;
    constructor(
        public readonly actor: Actor | URL,
        public readonly object: Activity | URL,
    ) { }
}
