import { ActivityObject, Objects } from "./object";
import { Actor } from "../actors";

export class Profile implements ActivityObject {
  public readonly type = Objects.PROFILE;
  public readonly summary: string;
  public readonly describes: Actor;
  public readonly id?: URL;
  constructor(params: {
    summary: string,
    describes: Actor,
    id?: URL,
  }) {
    this.summary = params.summary;
    this.describes = params.describes;
    if (params.id != null) {
      this.id = params.id;
    }
  }
}
