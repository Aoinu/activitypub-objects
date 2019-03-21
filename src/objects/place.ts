import { ActivityObject, Objects } from "./object";

export class Place implements ActivityObject {
  public readonly type = Objects.PLACE;
  public readonly name: string;
  public readonly id?: URL;
  public readonly accuracy?: number;
  public readonly altitude?: number;
  public readonly latitude?: number;
  public readonly longitude?: number;
  public readonly radius?: number;
  public readonly units?: string;
  constructor(params: {
    name: string,
    id?: URL,
    accuracy?: number,
    altitude?: number,
    latitude?: number,
    longitude?: number,
    radius?: number,
    units?: string,
  }) {
    this.name = params.name;
    if (params.id != null) {
      this.id = params.id;
    }
    if (params.accuracy != null) {
      this.accuracy = params.accuracy;
    }
    if (params.altitude != null) {
      this.altitude = params.altitude;
    }
    if (params.latitude != null) {
      this.latitude = params.latitude;
    }
    if (params.longitude != null) {
      this.longitude = params.longitude;
    }
    if (params.radius != null) {
      this.radius = params.radius;
    }
    if (params.units != null) {
      this.units = params.units;
    }
  }
}
