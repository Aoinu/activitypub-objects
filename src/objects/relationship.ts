import { ActivityObject, Objects } from "./object";
import { Actor } from "../actors";

export class Relationship implements ActivityObject {
  public readonly type = Objects.RELATIONSHIP;
  public readonly id?: URL;
  public readonly relationship: Relation;
  public readonly subject: Actor;
  public readonly object: Actor;
  constructor(params: {
    relationship: Relation,
    subject: Actor,
    object: Actor,
    id?: URL,
  }) {
    this.relationship = params.relationship;
    this.subject = params.subject;
    this.object = params.object;
    if (params.id != null) {
      this.id = params.id;
    }
  }
}

export enum Relation {
  FRIEND_OF = "http://purl.org/vocab/relationship/friendOf",
}
