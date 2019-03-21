import { IntransitiveActivity, Activities } from "./activity";
import { ActivityObject } from "../objects/object";
import { InvalidPropertiesError } from "../exceptions/invalid-properties-error";

/**
 * https://www.w3.org/TR/activitystreams-vocabulary/#dfn-question
 */
export class Question implements IntransitiveActivity {
    public readonly type = Activities.QUESTION;
    constructor(
        public readonly name: string,
        public readonly anyOf?: ActivityObject[],
        public readonly oneOf?: ActivityObject[],
    ) {
        if (anyOf != null && oneOf != null) {
            throw new InvalidPropertiesError("Question object must not have both properties. (anyOf, oneOf)");
        }
    }
}
