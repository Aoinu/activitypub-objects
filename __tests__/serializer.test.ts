import * as ActivityPub from "../src";

describe("Serializer", () => {
  describe("toJSON()", () => {
    it("should serialize objects", () => {
      const actor = new ActivityPub.Person("test");
      const actual = ActivityPub.toJSON(actor);
      const expected = "{\"@context\":\"https://www.w3.org/ns/activitystreams\",\"name\":\"test\",\"type\":\"Person\"}";
      expect(actual).toBe(expected);
    });
  });

  describe("parse()", () => {
    it("should deserialize JSON", () => {
      const noteJSON = "{\"@context\":\"https://www.w3.org/ns/activitystreams\","
        + "\"content\":\"test content\",\"name\":\"test\",\"type\":\"Note\"}";
      const expected = new ActivityPub.Note({
        name: "test",
        content: "test content",
      });
      const actual = ActivityPub.parse(noteJSON);
      expect(actual).toEqual(expected);
    });

    it("should throw error when JSON string does not have a @context", () => {
      const noteJSON = "{"
        + "\"content\":\"test content\",\"name\":\"test\",\"type\":\"Note\"}";
      expect(() => ActivityPub.parse(noteJSON))
        .toThrowError("The JSON string does not have a @context");
    });

    it("should throw error when JSON is not activity", () => {
      const noteJSON = "{\"@context\":\"https://test.com/vocab\","
        + "\"content\":\"test content\",\"name\":\"test\",\"type\":\"Note\"}";
      expect(() => ActivityPub.parse(noteJSON))
        .toThrowError("The JSON string is not activity vocabulary");
    });
  });
});
