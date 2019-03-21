import { ActivityObject, Objects } from "./object";

export class Event implements ActivityObject {
  public readonly type = Objects.EVENT;
  constructor(
    public readonly name: string,
    public readonly id: URL,
    public readonly startTime: Date,
    public readonly endTime: Date,
  ) { }
}
