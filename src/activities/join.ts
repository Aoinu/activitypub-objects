import { Activity, Activities } from "./activity";
import { Actor } from "../actors/actor";
import { ActivityObject } from "../objects/object";

/**
 * https://www.w3.org/TR/activitystreams-vocabulary/#dfn-join
 */
export class Join implements Activity {
  public readonly type = Activities.JOIN;
  constructor(
    public readonly actor: Actor | URL,
    public readonly object: ActivityObject | URL,
  ) { }
}
