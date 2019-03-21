import { Actor, Actors } from "./actor";

/**
 * https://www.w3.org/TR/activitystreams-vocabulary/#dfn-application
 */
export class Application implements Actor {
    public readonly type = Actors.APPLICATION;
    constructor(
        public readonly name: string,
    ) { }
}
