import { ActivityObject, Objects } from "./object";

export class Note implements ActivityObject {
  public readonly type = Objects.NOTE;
  public readonly name: string;
  public readonly id?: URL;
  public readonly content: string;
  constructor(params: {
    name: string,
    content: string,
    id?: URL,
  }) {
    this.name = params.name;
    this.content = params.content;
    if (params.id != null) {
      this.id = params.id;
    }
  }
}
