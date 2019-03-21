import { ActivityObject, Objects } from "./object";

export class Note implements ActivityObject {
    public readonly type = Objects.NOTE;
    constructor(
        public readonly name: string,
        public readonly id: URL,
        public readonly content: string,
    ) { }
}
