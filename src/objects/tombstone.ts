import { ActivityObject, Objects } from "./object";

export class Tombstone implements ActivityObject {
  public readonly type = Objects.TOMBSTONE;
  public readonly name: string;
  public readonly id?: URL;
  public readonly formerType: Objects;
  public readonly deleted: Date;
  constructor(params: {
    name: string,
    formerType: Objects,
    deleted: Date,
    id?: URL,
  }) {
    this.name = params.name;
    this.formerType = params.formerType;
    this.deleted = params.deleted;
    if (params.id != null) {
      this.id = params.id;
    }
  }
}
