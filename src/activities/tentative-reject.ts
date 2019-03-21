import { Actor } from "../actors/actor";
import { ActivityObject } from "../objects/object";
import { Activity, Activities } from "./activity";

/**
 * https://www.w3.org/TR/activitystreams-vocabulary/#dfn-tentativereject
 */
export class TentativeReject implements Activity {
  public readonly type = Activities.TENTATIVE_REJECT;
  constructor(
    public readonly actor: Actor | URL,
    public readonly object: ActivityObject | URL,
  ) { }
}
