import { Link } from "../link";
import { MediaType } from "./param-types/media-type";
import { Image } from "./image";
import { Collection } from "../collection";

export interface ActivityObject {
  type: string;
  id?: URL;
  attachment?: ActivityObject | Link;
  attributedTo?: ActivityObject | Link | URL | Array<ActivityObject | URL>;
  audience?: ActivityObject | Link;
  content?: string;
  context?: ActivityObject | Link;
  name?: string;
  generator?: ActivityObject | Link;
  icon?: Link | Image;
  location?: ActivityObject | URL | Link;
  preview?: ActivityObject | Link;
  endTime?: Date;
  startTime?: Date;
  published?: Date;
  updated?: Date;
  inReplyTo?: ActivityObject | Link;
  to?: ActivityObject | Link;
  bto?: ActivityObject | Link;
  cc?: ActivityObject | Link;
  bcc?: ActivityObject | Link;
  replies?: Collection;
  summary?: string;
  tag?: ActivityObject | Link;
  url?: URL | Link | Array<URL | Link>;
  mediaType?: MediaType;
  duration?: string;
}

export enum Objects {
  ARTICLE = "Article",
  AUDIO = "Audio",
  DOCUMENT = "Document",
  EVENT = "Event",
  IMAGE = "Image",
  NOTE = "Note",
  PAGE = "Page",
  PLACE = "Place",
  PROFILE = "Profile",
  RELATIONSHIP = "Relationship",
  TOMBSTONE = "Tombstone",
  VIDEO = "Video",
}
