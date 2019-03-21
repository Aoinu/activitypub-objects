import { Activity, Activities } from "./activity";
import { Actor } from "../actors/actor";
import { ActivityObject } from "../objects/object";

/**
 * https://www.w3.org/TR/activitystreams-vocabulary/#dfn-invite
 */
export class Invite implements Activity {
  public readonly type = Activities.INVITE;
  constructor(
    public readonly actor: Actor | URL,
    public readonly object: ActivityObject | URL,
    public readonly target: Actor | URL | Array<Actor | URL>,
  ) { }
}
