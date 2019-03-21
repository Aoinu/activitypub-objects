import { ActivityObject, Objects } from "./object";
import { Actor } from "../actors";

export class Profile implements ActivityObject {
  public readonly type = Objects.PROFILE;
  constructor(
    public readonly id: URL,
    public readonly summary: string,
    public readonly describes: Actor,
  ) { }
}
