import { ActivityObject } from "../objects/object";

export interface Actor extends ActivityObject {
  type: Actors;
  name: string;
}

export enum Actors {
  APPLICATION = "Application",
  GROUP = "Group",
  ORGANIZATION = "Organization",
  PERSON = "Person",
  SERVICE = "Service",
}
