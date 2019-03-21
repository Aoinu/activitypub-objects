"use strict";

import * as ActivityPub from "../src";

describe("Actor", () => {
  describe("Person", () => {
    it("should be able to create instance", () => {
      const person = new ActivityPub.Person("test");
      expect(person).toBeTruthy();
    });
  });
});
