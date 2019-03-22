import * as ActivityPub from "../src";

describe("Actor", () => {
  describe("Person", () => {
    it("should be able to create instance", () => {
      const actor = new ActivityPub.Person("test");
      expect(actor).toBeTruthy();
      expect(actor.name).toBe("test");
    });
  });

  describe("Group", () => {
    it("should be able to create instance", () => {
      const actor = new ActivityPub.Group("test");
      expect(actor).toBeTruthy();
      expect(actor.name).toBe("test");
    });
  });

  describe("Service", () => {
    it("should be able to create instance", () => {
      const actor = new ActivityPub.Service("test");
      expect(actor).toBeTruthy();
      expect(actor.name).toBe("test");
    });
  });

  describe("Organization", () => {
    it("should be able to create instance", () => {
      const actor = new ActivityPub.Organization("test");
      expect(actor).toBeTruthy();
      expect(actor.name).toBe("test");
    });
  });

  describe("Application", () => {
    it("should be able to create instance", () => {
      const actor = new ActivityPub.Application("test");
      expect(actor).toBeTruthy();
      expect(actor.name).toBe("test");
    });
  });
});
