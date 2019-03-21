import { Activity, Activities } from "./activity";
import { Actor } from "../actors/actor";
import { ActivityObject } from "../objects/object";
import { Ignore } from "./ignore";

/**
 * https://www.w3.org/TR/activitystreams-vocabulary/#dfn-delete
 */
export class Delete implements Activity {
  public readonly type = Activities.DELETE;
  constructor(
    public readonly actor: Actor | URL,
    public readonly object: ActivityObject | URL,
    public readonly origin?: ActivityObject | URL,
  ) { }
}
