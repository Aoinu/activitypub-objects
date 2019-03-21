import { ActivityObject, Objects } from "./object";
import { Link } from "../link";

export class Video implements ActivityObject {
  public readonly type = Objects.VIDEO;
  constructor(
    public readonly name: string,
    public readonly id: URL,
    public readonly url: Link | URL | Array<Link | URL>,
    public readonly duration: string,
  ) { }
}
