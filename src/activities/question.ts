import { IntransitiveActivity, Activities } from "./activity";
import { ActivityObject } from "../objects/object";
import { InvalidPropertiesError } from "../exceptions/invalid-properties-error";

/**
 * https://www.w3.org/TR/activitystreams-vocabulary/#dfn-question
 */
export class Question implements IntransitiveActivity {
  public readonly type = Activities.QUESTION;
  public readonly name: string;
  public readonly content?: string;
  public readonly anyOf?: ActivityObject[];
  public readonly oneOf?: ActivityObject[];
  public readonly closed?: Date;
  constructor(params: {
    name: string,
    id?: URL,
    content?: string,
    anyOf?: ActivityObject[],
    oneOf?: ActivityObject[],
    closed?: Date,
  }) {
    this.name = params.name;
    this.closed = params.closed;
    if (params.content == null && params.anyOf == null && params.oneOf == null) {
      throw new InvalidPropertiesError("Question object must not have both properties. (content, anyOf, oneOf)");
    }
    this.content = params.content;
    this.anyOf = params.anyOf;
    this.oneOf = params.oneOf;
  }
}
