import { ActivityObject, Objects } from "./object";
import { Link } from "../link";

export class Document implements ActivityObject {
  public readonly type = Objects.DOCUMENT;
  public readonly name: string;
  public readonly id?: URL;
  public readonly url: Link | URL | Array<Link | URL>;
  constructor(params: {
    name: string,
    url: Link | URL | Array<Link | URL>,
    id?: URL,
  }) {
    this.name = params.name;
    this.url = params.url;
    if (params.id != null) {
      this.id = params.id;
    }
  }
}
