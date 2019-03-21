import { ActivityObject, Objects } from "./object";
import { Link } from "../link";

export class Page implements ActivityObject {
  public readonly type = Objects.PAGE;
  constructor(
    public readonly name: string,
    public readonly id: URL,
    public readonly url: Link | URL | Array<Link | URL>,
  ) { }
}
