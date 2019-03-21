import { Activity, Activities } from "./activity";
import { Actor } from "../actors/actor";
import { ActivityObject } from "../objects/object";

/**
 * https://www.w3.org/TR/activitystreams-vocabulary/#dfn-move
 */
export class Move implements Activity {
  public readonly type = Activities.MOVE;
  constructor(
    public readonly actor: Actor | URL,
    public readonly object: ActivityObject | URL,
    public readonly origin?: ActivityObject | URL,
    public readonly target?: ActivityObject | URL,
  ) { }
}
