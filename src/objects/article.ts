import { ActivityObject, Objects } from "./object";
import { Actor } from "../actors";

export class Article implements ActivityObject {
  public readonly type = Objects.ARTICLE;
  public readonly name: string;
  public readonly id?: URL;
  public readonly content: string;
  public readonly attributedTo?: Actor | URL | Array<Actor | URL>;
  constructor(params: {
    name: string,
    content: string,
    id?: URL,
    attributedTo?: Actor | URL | Array<Actor | URL>,
  }) {
    this.name = params.name;
    this.content = params.content;
    if (params.id != null) {
      this.id = params.id;
    }
    if (params.attributedTo != null) {
      this.attributedTo = params.attributedTo;
    }
  }
}
