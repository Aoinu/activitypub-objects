import { ActivityObject, Objects } from "./object";
import { Link } from "../link";

export class Video implements ActivityObject {
  public readonly type = Objects.VIDEO;
  public readonly name: string;
  public readonly id?: URL;
  public readonly url: Link | URL | Array<Link | URL>;
  public readonly duration: string;
  constructor(params: {
    name: string,
    url: Link | URL | Array<Link | URL>,
    duration: string,
    id?: URL,
  }) {
    this.name = params.name;
    this.url = params.url;
    this.duration = params.duration;
    if (params.id != null) {
      this.id = params.id;
    }
  }
}
