"use strict";

import * as ActivityPub from "../src";

describe("Object", () => {
  describe("Article", () => {
    it("should be able to create instance", () => {
      const obj = new ActivityPub.Article({
        name: "test",
        id: new URL("https://test.com/1"),
        content: "test content",
      });
      expect.assertions(5);
      expect(obj).toBeTruthy();
      expect(obj.name).toBe("test");
      if (obj.id != null) {
        expect(obj.id.href).toBe("https://test.com/1");
      }
      expect(obj.content).toBe("test content");
      expect(obj.attributedTo).toBeUndefined();
    });
  });

  describe("Audio", () => {
    it("should be able to create instance", () => {
      const obj = new ActivityPub.Audio({
        name: "test",
        id: new URL("https://test.com/1"),
        url: new URL("https://test.com/audio/1"),
      });
      expect.assertions(3);
      expect(obj).toBeTruthy();
      expect(obj.name).toBe("test");
      if (obj.id != null) {
        expect(obj.id.href).toBe("https://test.com/1");
      }
    });
  });

  describe("Document", () => {
    it("should be able to create instance", () => {
      const obj = new ActivityPub.Document({
        name: "test",
        id: new URL("https://test.com/1"),
        url: new URL("https://test.com/document/1"),
      });
      expect.assertions(3);
      expect(obj).toBeTruthy();
      expect(obj.name).toBe("test");
      if (obj.id != null) {
        expect(obj.id.href).toBe("https://test.com/1");
      }
    });
  });

  describe("Event", () => {
    it("should be able to create instance", () => {
      const obj = new ActivityPub.Event({
        name: "test",
        id: new URL("https://test.com/1"),
        startTime: new Date(),
        endTime: new Date(),
      });
      expect.assertions(3);
      expect(obj).toBeTruthy();
      expect(obj.name).toBe("test");
      if (obj.id != null) {
        expect(obj.id.href).toBe("https://test.com/1");
      }
    });
  });

  describe("Image", () => {
    it("should be able to create instance", () => {
      const obj = new ActivityPub.Image({
        name: "test",
        id: new URL("https://test.com/1"),
        url: new URL("https://test.com/image/1"),
      });
      expect.assertions(3);
      expect(obj).toBeTruthy();
      expect(obj.name).toBe("test");
      if (obj.id != null) {
        expect(obj.id.href).toBe("https://test.com/1");
      }
    });
  });

  describe("Note", () => {
    it("should be able to create instance", () => {
      const obj = new ActivityPub.Note({
        name: "test",
        id: new URL("https://test.com/1"),
        content: "test content",
      });
      expect.assertions(4);
      expect(obj).toBeTruthy();
      expect(obj.name).toBe("test");
      expect(obj.content).toBe("test content");
      if (obj.id != null) {
        expect(obj.id.href).toBe("https://test.com/1");
      }
    });
  });

  describe("Page", () => {
    it("should be able to create instance", () => {
      const obj = new ActivityPub.Page({
        name: "test",
        id: new URL("https://test.com/1"),
        url: new URL("https://test.com/image/1"),
      });
      expect.assertions(3);
      expect(obj).toBeTruthy();
      expect(obj.name).toBe("test");
      if (obj.id != null) {
        expect(obj.id.href).toBe("https://test.com/1");
      }
    });
  });

  describe("Place", () => {
    it("should be able to create instance", () => {
      const obj = new ActivityPub.Place({
        name: "test",
        id: new URL("https://test.com/1"),
        accuracy: 0.1,
        altitude: 100,
        latitude: 36.75,
        longitude: 119.7667,
        radius: 15,
        units: "miles",
      });
      expect.assertions(9);
      expect(obj).toBeTruthy();
      expect(obj.name).toBe("test");
      if (obj.id != null) {
        expect(obj.id.href).toBe("https://test.com/1");
      }
      expect(obj.accuracy).toBe(0.1);
      expect(obj.altitude).toBe(100);
      expect(obj.latitude).toBe(36.75);
      expect(obj.longitude).toBe(119.7667);
      expect(obj.radius).toBe(15);
      expect(obj.units).toBe("miles");
    });
  });

  describe("Profile", () => {
    it("should be able to create instance", () => {
      const obj = new ActivityPub.Profile({
        id: new URL("https://test.com/1"),
        summary: "test summary",
        describes: new ActivityPub.Person("test"),
      });
      expect.assertions(3);
      expect(obj).toBeTruthy();
      expect(obj.describes.name).toBe("test");
      if (obj.id != null) {
        expect(obj.id.href).toBe("https://test.com/1");
      }
    });
  });

  describe("Relationship", () => {
    it("should be able to create instance", () => {
      const obj = new ActivityPub.Relationship({
        id: new URL("https://test.com/1"),
        relationship: ActivityPub.Relation.FRIEND_OF,
        subject: new ActivityPub.Person("test1"),
        object: new ActivityPub.Person("test2"),
      });
      expect(obj).toBeTruthy();
      if (obj.id != null) {
        expect(obj.id.href).toBe("https://test.com/1");
      }
      expect(obj.subject.name).toBe("test1");
      expect(obj.object.name).toBe("test2");
    });
  });

  describe("Tombstone", () => {
    it("should be able to create instance", () => {
      const obj = new ActivityPub.Tombstone({
        name: "name",
        id: new URL("https://test.com/image/1"),
        formerType: ActivityPub.Objects.IMAGE,
        deleted: new Date(),
      });
      expect(obj).toBeTruthy();
      if (obj.id != null) {
        expect(obj.id.href).toBe("https://test.com/image/1");
      }
    });
  });

  describe("Video", () => {
    it("should be able to create instance", () => {
      const obj = new ActivityPub.Video({
        name: "name",
        id: new URL("https://test.com/video/1"),
        url: new URL("https://test.com/video/1"),
        duration: "PT5S",
      });
      expect(obj).toBeTruthy();
      if (obj.id != null) {
        expect(obj.id.href).toBe("https://test.com/video/1");
      }
    });
  });

});
