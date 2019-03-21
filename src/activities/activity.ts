import { ActivityObject } from "../objects/object";
import { Link } from "../link";
import { Actor } from "../actors/actor";

export interface Activity extends ActivityObject {
  actor?: Actor | URL | Array<Actor | URL>;
  target?: ActivityObject | URL | Link | Array<ActivityObject | URL>;
  result?: ActivityObject | Link;
  origin?: ActivityObject | URL | Link;
  instrument?: ActivityObject | Link;
  object?: ActivityObject | URL;
}

export enum Activities {
  ACCEPT = "Accept",
  ADD = "Add",
  ANNOUNCE = "Announce",
  ARRIVE = "Arrive",
  BLOCK = "Block",
  CREATE = "Create",
  DELETE = "Delete",
  DISLIKE = "Dislike",
  FLAG = "Flag",
  FOLLOW = "Follow",
  IGNORE = "Ignore",
  INVITE = "Invite",
  JOIN = "Join",
  LEAVE = "Leave",
  LIKE = "Like",
  LISTEN = "Listen",
  MOVE = "Move",
  OFFER = "Offer",
  QUESTION = "Question",
  READ = "Read",
  REJECT = "Reject",
  REMOVE = "Remove",
  TENTATIVE_ACCEPT = "TentativeAccept",
  TENTATIVE_REJECT = "TentativeReject",
  TRAVEL = "Travel",
  UNDO = "Undo",
  UPDATE = "Update",
  VIEW = "View",
}

export interface IntransitiveActivity extends Activity { }
