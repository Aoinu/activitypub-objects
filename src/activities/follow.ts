import { Activity, Activities } from "./activity";
import { Actor } from "../actors/actor";
import { ActivityObject } from "../objects/object";

/**
 * https://www.w3.org/TR/activitystreams-vocabulary/#dfn-follow
 */
export class Follow implements Activity {
  public readonly type = Activities.FOLLOW;
  constructor(
    public readonly actor: Actor | URL,
    public readonly object: ActivityObject | URL,
  ) { }
}
