import { Activity, Activities } from "./activity";
import { Actor } from "../actors/actor";
import { ActivityObject } from "../objects/object";

/**
 * https://www.w3.org/TR/activitystreams-vocabulary/#dfn-announce
 */
export class Announce implements Activity {
  public readonly type = Activities.ANNOUNCE;
  constructor(
    public readonly actor: Actor | URL,
    public readonly object: Activity | URL,
    public readonly target?: ActivityObject | URL,
  ) { }
}
