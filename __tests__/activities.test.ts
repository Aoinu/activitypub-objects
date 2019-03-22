import * as ActivityPub from "../src";
import { InvalidPropertiesError } from "../src";

describe("Activity", () => {
  describe("Accept", () => {
    it("should be able to create instance", () => {
      const activity = new ActivityPub.Accept(
        new ActivityPub.Person("test1"), new ActivityPub.Person("test2"), new ActivityPub.Group("group1"));
      expect(activity).toBeTruthy();
      expect((activity.actor as ActivityPub.Actor).name ).toBe("test1");
      expect((activity.object as ActivityPub.Actor).name).toBe("test2");
      expect((activity.target as ActivityPub.Group).name).toBe("group1");
    });
  });

  describe("Add", () => {
    it("should be able to create instance", () => {
      const activity = new ActivityPub.Add(
        new ActivityPub.Person("test"), new URL("https://test.com/1"));
      expect(activity).toBeTruthy();
      expect((activity.actor as ActivityPub.Actor).name ).toBe("test");
    });
  });

  describe("Announce", () => {
    it("should be able to create instance", () => {
      const activity = new ActivityPub.Announce(
        new ActivityPub.Person("test"), new URL("https://test.com/1"));
      expect(activity).toBeTruthy();
      expect((activity.actor as ActivityPub.Actor).name ).toBe("test");
    });
  });

  describe("Arrive", () => {
    it("should be able to create instance", () => {
      const activity = new ActivityPub.Arrive(
        new ActivityPub.Person("test"), new URL("https://test.com/1"));
      expect(activity).toBeTruthy();
      expect((activity.actor as ActivityPub.Actor).name ).toBe("test");
    });
  });

  describe("Block", () => {
    it("should be able to create instance", () => {
      const activity = new ActivityPub.Block(
        new ActivityPub.Person("test"), new URL("https://test.com/1"));
      expect(activity).toBeTruthy();
      expect((activity.actor as ActivityPub.Actor).name ).toBe("test");
    });
  });

  describe("Create", () => {
    it("should be able to create instance", () => {
      const activity = new ActivityPub.Create(
        new ActivityPub.Person("test"), new URL("https://test.com/1"));
      expect(activity).toBeTruthy();
      expect((activity.actor as ActivityPub.Actor).name ).toBe("test");
    });
  });

  describe("Delete", () => {
    it("should be able to create instance", () => {
      const activity = new ActivityPub.Delete(
        new ActivityPub.Person("test"), new URL("https://test.com/1"));
      expect(activity).toBeTruthy();
      expect((activity.actor as ActivityPub.Actor).name ).toBe("test");
    });
  });

  describe("Dislike", () => {
    it("should be able to create instance", () => {
      const activity = new ActivityPub.Dislike(
        new ActivityPub.Person("test"), new URL("https://test.com/1"));
      expect(activity).toBeTruthy();
      expect((activity.actor as ActivityPub.Actor).name ).toBe("test");
    });
  });

  describe("Flag", () => {
    it("should be able to create instance", () => {
      const activity = new ActivityPub.Flag(
        new ActivityPub.Person("test"), new URL("https://test.com/1"));
      expect(activity).toBeTruthy();
      expect((activity.actor as ActivityPub.Actor).name ).toBe("test");
    });
  });

  describe("Follow", () => {
    it("should be able to create instance", () => {
      const activity = new ActivityPub.Follow(
        new ActivityPub.Person("test"), new URL("https://test.com/1"));
      expect(activity).toBeTruthy();
      expect((activity.actor as ActivityPub.Actor).name ).toBe("test");
    });
  });

  describe("Ignore", () => {
    it("should be able to create instance", () => {
      const activity = new ActivityPub.Ignore(
        new ActivityPub.Person("test"), new URL("https://test.com/1"));
      expect(activity).toBeTruthy();
      expect((activity.actor as ActivityPub.Actor).name ).toBe("test");
    });
  });

  describe("Invite", () => {
    it("should be able to create instance", () => {
      const activity = new ActivityPub.Invite(
        new ActivityPub.Person("test1"),
        new ActivityPub.Event({
          name: "party",
          id: new URL("https://test.com/event/1"),
        }),
        new ActivityPub.Person("test2"),
      );
      expect(activity).toBeTruthy();
      expect((activity.actor as ActivityPub.Actor).name ).toBe("test1");
    });
  });

  describe("Join", () => {
    it("should be able to create instance", () => {
      const activity = new ActivityPub.Join(
        new ActivityPub.Person("test1"), new ActivityPub.Group("group1"));
      expect(activity).toBeTruthy();
      expect((activity.actor as ActivityPub.Actor).name ).toBe("test1");
    });
  });

  describe("Leave", () => {
    it("should be able to create instance", () => {
      const activity = new ActivityPub.Leave(
        new ActivityPub.Person("test1"), new ActivityPub.Group("group1"));
      expect(activity).toBeTruthy();
      expect((activity.actor as ActivityPub.Actor).name ).toBe("test1");
    });
  });

  describe("Like", () => {
    it("should be able to create instance", () => {
      const activity = new ActivityPub.Like(
        new ActivityPub.Person("test1"), new URL("https:///test.com/1"));
      expect(activity).toBeTruthy();
      expect((activity.actor as ActivityPub.Actor).name ).toBe("test1");
    });
  });

  describe("Listen", () => {
    it("should be able to create instance", () => {
      const activity = new ActivityPub.Listen(
        new ActivityPub.Person("test1"), new URL("https:///test.com/1"));
      expect(activity).toBeTruthy();
      expect((activity.actor as ActivityPub.Actor).name ).toBe("test1");
    });
  });

  describe("Move", () => {
    it("should be able to create instance", () => {
      const activity = new ActivityPub.Move(
        new ActivityPub.Person("test1"), new URL("https:///test.com/1"));
      expect(activity).toBeTruthy();
      expect((activity.actor as ActivityPub.Actor).name ).toBe("test1");
    });
  });

  describe("Offer", () => {
    it("should be able to create instance", () => {
      const activity = new ActivityPub.Offer(
        new ActivityPub.Person("test1"), new URL("https:///test.com/1"));
      expect(activity).toBeTruthy();
      expect((activity.actor as ActivityPub.Actor).name ).toBe("test1");
    });
  });

  describe("Question", () => {
    it("should be able to create instance", () => {
      const activity = new ActivityPub.Question({
        name: "test",
        oneOf: [new ActivityPub.Note({
          name: "option1",
          id: new URL("https://test.com/1"),
          content: "option1",
        })],
      });
      expect.assertions(4);
      expect(activity).toBeTruthy();
      expect(activity.name).toBe("test");
      expect(activity.oneOf).toBeDefined();
      if (activity.oneOf != null) {
        expect(activity.oneOf[0].name).toBe("option1");
      }
    });

    it("should throw InvalidPropertiesError when options or contents of the question is not set", () => {
      const newQuestion = () => {
        return new ActivityPub.Question({
          name: "test",
        });
      };
      expect(newQuestion).toThrowError(
        new InvalidPropertiesError("Question object must not have both properties. (content, anyOf, oneOf)"));
    });
  });

  describe("Read", () => {
    it("should be able to create instance", () => {
      const activity = new ActivityPub.Read(
        new ActivityPub.Person("test1"), new URL("https:///test.com/1"));
      expect(activity).toBeTruthy();
      expect((activity.actor as ActivityPub.Actor).name ).toBe("test1");
    });
  });

  describe("Remove", () => {
    it("should be able to create instance", () => {
      const activity = new ActivityPub.Remove(
        new ActivityPub.Person("test1"), new URL("https:///test.com/1"));
      expect(activity).toBeTruthy();
      expect((activity.actor as ActivityPub.Actor).name ).toBe("test1");
    });
  });

  describe("Reject", () => {
    it("should be able to create instance", () => {
      const activity = new ActivityPub.Reject(
        new ActivityPub.Person("test1"), new URL("https:///test.com/1"));
      expect(activity).toBeTruthy();
      expect((activity.actor as ActivityPub.Actor).name ).toBe("test1");
    });
  });

  describe("TentativeAccept", () => {
    it("should be able to create instance", () => {
      const activity = new ActivityPub.TentativeAccept(
        new ActivityPub.Person("test1"), new URL("https:///test.com/1"));
      expect(activity).toBeTruthy();
      expect((activity.actor as ActivityPub.Actor).name ).toBe("test1");
    });
  });

  describe("TentativeReject", () => {
    it("should be able to create instance", () => {
      const activity = new ActivityPub.TentativeReject(
        new ActivityPub.Person("test1"), new URL("https:///test.com/1"));
      expect(activity).toBeTruthy();
      expect((activity.actor as ActivityPub.Actor).name ).toBe("test1");
    });
  });

  describe("Travel", () => {
    it("should be able to create instance", () => {
      const activity = new ActivityPub.Travel(
        new ActivityPub.Person("test1"), new URL("https:///test.com/1"), new URL("https:///test.com/2"));
      expect(activity).toBeTruthy();
      expect((activity.actor as ActivityPub.Actor).name ).toBe("test1");
    });
  });

  describe("Undo", () => {
    it("should be able to create instance", () => {
      const activity = new ActivityPub.Undo(
        new ActivityPub.Person("test1"), new URL("https:///test.com/1"));
      expect(activity).toBeTruthy();
      expect((activity.actor as ActivityPub.Actor).name ).toBe("test1");
    });
  });

  describe("Update", () => {
    it("should be able to create instance", () => {
      const activity = new ActivityPub.Update(
        new ActivityPub.Person("test1"), new URL("https:///test.com/1"));
      expect(activity).toBeTruthy();
      expect((activity.actor as ActivityPub.Actor).name ).toBe("test1");
    });
  });

  describe("View", () => {
    it("should be able to create instance", () => {
      const activity = new ActivityPub.View(
        new ActivityPub.Person("test1"), new URL("https:///test.com/1"));
      expect(activity).toBeTruthy();
      expect((activity.actor as ActivityPub.Actor).name ).toBe("test1");
    });
  });
});
