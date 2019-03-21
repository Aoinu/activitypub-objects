import { ActivityObject } from "./objects/object";
import { MediaType } from "./objects/param-types/media-type";
import { LanguageTag } from "./objects/param-types/language-tag";

export interface Link {
    type: string;
    href: URL;
    rel?: string;
    mediaType?: MediaType;
    name?: string;
    hreflang?: LanguageTag;
    height?: number;
    width?: number;
    preview?: Link | ActivityObject;
}
