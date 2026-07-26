import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { isPublishedContent } from "../lib/utils/publication.ts";

describe("isPublishedContent", () => {
  it("missing status is published (legacy)", () => {
    assert.equal(isPublishedContent({}), true);
  });
  it("published is visible", () => {
    assert.equal(isPublishedContent({ status: "published" }), true);
  });
  it("draft is hidden", () => {
    assert.equal(isPublishedContent({ status: "draft" }), false);
  });
  it("archived is hidden", () => {
    assert.equal(isPublishedContent({ status: "archived" }), false);
  });
});
