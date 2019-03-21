import { ActivityObject, Objects } from "./object";

export class Place implements ActivityObject {
  public readonly type = Objects.PLACE;
  constructor(
    public readonly name: string,
    public readonly id: URL,
    public readonly accuracy?: number,
    public readonly altitude?: number,
    public readonly latitude?: number,
    public readonly longitude?: number,
    public readonly radius?: number,
    public readonly units?: string,
  ) { }
}
