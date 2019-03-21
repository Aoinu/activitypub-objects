"use strict";

import * as ActivityPub from "../src";

describe("Object", () => {
  describe("Article", () => {
    it("should be able to create instance", () => {
      const obj = new ActivityPub.Article("test", new URL("https://test.com/1"), "test content");
      expect(obj).toBeTruthy();
      expect(obj.name).toBe("test");
      expect(obj.id.href).toBe("https://test.com/1");
      expect(obj.content).toBe("test content");
      expect(obj.attributedTo).toBeUndefined();
    });
  });

  describe("Audio", () => {
    it("should be able to create instance", () => {
      const obj = new ActivityPub.Audio("test", new URL("https://test.com/1"), new URL("https://test.com/audio/1"));
      expect(obj).toBeTruthy();
      expect(obj.name).toBe("test");
      expect(obj.id.href).toBe("https://test.com/1");
    });
  });

  describe("Document", () => {
    it("should be able to create instance", () => {
      const obj = new ActivityPub.Document(
        "test", new URL("https://test.com/1"), new URL("https://test.com/document/1"));
      expect(obj).toBeTruthy();
      expect(obj.name).toBe("test");
      expect(obj.id.href).toBe("https://test.com/1");
    });
  });

  describe("Event", () => {
    it("should be able to create instance", () => {
      const obj = new ActivityPub.Event(
        "test", new URL("https://test.com/1"), new Date(), new Date());
      expect(obj).toBeTruthy();
      expect(obj.name).toBe("test");
      expect(obj.id.href).toBe("https://test.com/1");
    });
  });

  describe("Image", () => {
    it("should be able to create instance", () => {
      const obj = new ActivityPub.Image(
        "test", new URL("https://test.com/1"), new URL("https://test.com/image/1"));
      expect(obj).toBeTruthy();
      expect(obj.name).toBe("test");
      expect(obj.id.href).toBe("https://test.com/1");
    });
  });

  describe("Note", () => {
    it("should be able to create instance", () => {
      const obj = new ActivityPub.Note(
        "test", new URL("https://test.com/1"), "test content");
      expect(obj).toBeTruthy();
      expect(obj.name).toBe("test");
      expect(obj.id.href).toBe("https://test.com/1");
      expect(obj.content).toBe("test content");
    });
  });

  describe("Page", () => {
    it("should be able to create instance", () => {
      const obj = new ActivityPub.Page(
        "test", new URL("https://test.com/1"), new URL("https://test.com/image/1"));
      expect(obj).toBeTruthy();
      expect(obj.name).toBe("test");
      expect(obj.id.href).toBe("https://test.com/1");
    });
  });

  describe("Place", () => {
    it("should be able to create instance", () => {
      const obj = new ActivityPub.Place(
        "test", new URL("https://test.com/1"));
      expect(obj).toBeTruthy();
      expect(obj.name).toBe("test");
      expect(obj.id.href).toBe("https://test.com/1");
    });
  });

  describe("Profile", () => {
    it("should be able to create instance", () => {
      const obj = new ActivityPub.Profile(
        new URL("https://test.com/1"), "test summary", new ActivityPub.Person("test"));
      expect(obj).toBeTruthy();
      expect(obj.id.href).toBe("https://test.com/1");
      expect(obj.describes.name).toBe("test");
    });
  });

  describe("Relationship", () => {
    it("should be able to create instance", () => {
      const obj = new ActivityPub.Relationship(
        new URL("https://test.com/1"),
        ActivityPub.Relation.FRIEND_OF,
        new ActivityPub.Person("test1"),
        new ActivityPub.Person("test2")
      );
      expect(obj).toBeTruthy();
      expect(obj.id.href).toBe("https://test.com/1");
      expect(obj.subject.name).toBe("test1");
      expect(obj.object.name).toBe("test2");
    });
  });

  describe("Tombstone", () => {
    it("should be able to create instance", () => {
      const obj = new ActivityPub.Tombstone(
        "name", new URL("https://test.com/image/1"), ActivityPub.Objects.IMAGE, new Date());
      expect(obj).toBeTruthy();
      expect(obj.id.href).toBe("https://test.com/image/1");
    });
  });

  describe("Video", () => {
    it("should be able to create instance", () => {
      const obj = new ActivityPub.Video(
        "name", new URL("https://test.com/video/1"), new URL("https://test.com/video/1"), "PT5S");
      expect(obj).toBeTruthy();
      expect(obj.id.href).toBe("https://test.com/video/1");
    });
  });

});
