import { Actor, Actors } from "./actor";

/**
 * https://www.w3.org/TR/activitystreams-vocabulary/#dfn-service
 */
export class Service implements Actor {
  public readonly type = Actors.SERVICE;
  constructor(
    public readonly name: string,
  ) { }
}
