import { ActivityObject } from "./objects";
import { InvalidPropertiesError } from "./exceptions";

export const toJSON = (obj: ActivityObject) => {
  const json: any = Object.assign({}, obj);
  json["@context"] = "https://www.w3.org/ns/activitystreams";

  // Return JSON sorted by key
  return JSON.stringify(json, (_, v) => {
    if (!(v instanceof Array || v === null) && typeof v === "object") {
      return Object.keys(v).sort().reduce((r: any, k) => {
        r[k] = v[k];
        return r;
      }, {});
    } else {
      return v;
    }
  });
};

export const parse = (json: string): ActivityObject => {
  const obj = JSON.parse(json);
  if (obj["@context"] == null) {
    throw new InvalidPropertiesError("The JSON string does not have a @context");
  } else if ((obj["@context"] as string).indexOf("https://www.w3.org/ns/activitystreams") !== 0) {
    throw new InvalidPropertiesError("The JSON string is not activity vocabulary");
  }
  delete obj["@context"];
  return obj as ActivityObject;
};
