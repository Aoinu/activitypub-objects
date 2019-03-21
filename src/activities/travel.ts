import { IntransitiveActivity, Activities } from "./activity";
import { Actor } from "../actors/actor";
import { ActivityObject } from "../objects/object";

/**
 * https://www.w3.org/TR/activitystreams-vocabulary/#dfn-travel
 */
export class Travel implements IntransitiveActivity {
    public readonly type = Activities.TRAVEL;
    constructor(
        public readonly actor: Actor | URL,
        public readonly origin: ActivityObject | URL,
        public readonly target: ActivityObject | URL,
    ) { }
}
