import { Activity, Activities } from "./activity";
import { Actor } from "../actors/actor";
import { ActivityObject } from "../objects/object";

/**
 * https://www.w3.org/TR/activitystreams-vocabulary/#dfn-dislike
 */
export class Dislike implements Activity {
  public readonly type = Activities.DISLIKE;
  constructor(
    public readonly actor: Actor | URL,
    public readonly object: ActivityObject | URL,
  ) { }
}
