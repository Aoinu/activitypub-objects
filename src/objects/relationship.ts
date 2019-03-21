import { ActivityObject, Objects } from "./object";
import { Actor } from "../actors";

export class Relationship implements ActivityObject {
  public readonly type = Objects.RELATIONSHIP;
  constructor(
    public readonly id: URL,
    public readonly relationship: Relation,
    public readonly subject: Actor,
    public readonly object: Actor,
  ) { }
}

export enum Relation {
  FRIEND_OF = "http://purl.org/vocab/relationship/friendOf",
}
