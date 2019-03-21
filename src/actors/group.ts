import { Actor, Actors } from "./actor";

/**
 * https://www.w3.org/TR/activitystreams-vocabulary/#dfn-group
 */
export class Group implements Actor {
    public readonly type = Actors.GROUP;
    constructor(
        public readonly name: string,
    ) { }
}
