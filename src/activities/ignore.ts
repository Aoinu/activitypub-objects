import { Activity, Activities } from "./activity";
import { Actor } from "../actors/actor";
import { ActivityObject } from "../objects/object";

/**
 * https://www.w3.org/TR/activitystreams-vocabulary/#dfn-ignore
 */
export class Ignore implements Activity {
    public readonly type = Activities.IGNORE;
    constructor(
        public readonly actor: Actor | URL,
        public readonly object: ActivityObject | URL,
    ) { }
}
