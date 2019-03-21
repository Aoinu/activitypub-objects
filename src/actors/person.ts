import { Actor, Actors } from "./actor";

/**
 * https://www.w3.org/TR/activitystreams-vocabulary/#dfn-person
 */
export class Person implements Actor {
  public readonly type = Actors.PERSON;
  constructor(
    public readonly name: string,
  ) { }
}
