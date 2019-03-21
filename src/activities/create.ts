import { Activity, Activities } from "./activity";
import { Actor } from "../actors/actor";
import { ActivityObject } from "../objects/object";

/**
 * https://www.w3.org/TR/activitystreams-vocabulary/#dfn-create
 */
export class Create implements Activity {
  public readonly type = Activities.CREATE;
  constructor(
    public readonly actor: Actor | URL,
    public readonly object: ActivityObject | URL,
  ) { }
}
