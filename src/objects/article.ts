import { ActivityObject, Objects } from "./object";
import { Actor } from "../actors";

export class Article implements ActivityObject {
  public readonly type = Objects.ARTICLE;
  constructor(
    public readonly name: string,
    public readonly id: URL,
    public readonly content: string,
    public readonly attributedTo?: Actor | URL | Array<Actor | URL>,
  ) { }
}
