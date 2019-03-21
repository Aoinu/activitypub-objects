import { ActivityObject, Objects } from "./object";
import { Actor } from "../actors";

export class Relationship implements ActivityObject {
    public readonly type = Objects.RELATIONSHIP;
    constructor(
        public readonly id: URL,
        public readonly relationship: string,
        public readonly subject: Actor,
        public readonly object: Actor,
    ) { }
}
