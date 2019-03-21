import { Actor, Actors } from "./actor";

/**
 * https://www.w3.org/TR/activitystreams-vocabulary/#dfn-organization
 */
export class Organization implements Actor {
  public readonly type = Actors.ORGANIZATION;
  constructor(
    public readonly name: string,
  ) { }
}
