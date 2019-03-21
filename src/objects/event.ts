import { ActivityObject, Objects } from "./object";

export class Event implements ActivityObject {
  public readonly type = Objects.EVENT;
  public readonly name: string;
  public readonly id?: URL;
  public readonly startTime?: Date;
  public readonly endTime?: Date;
  constructor(params: {
    name: string,
    id?: URL,
    startTime?: Date,
    endTime?: Date,
  }) {
    this.name = params.name;
    if (params.id != null) {
      this.id = params.id;
    }
    if (params.startTime != null) {
      this.startTime = params.startTime;
    }
    if (params.endTime != null) {
      this.endTime = params.endTime;
    }
  }
}
