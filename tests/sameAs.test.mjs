import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { normalizeSameAs } from "../lib/utils/sameAs.ts";

describe("normalizeSameAs", () => {
  it("removes duplicates", () => {
    const url = "https://maps.app.goo.gl/KsSSPtbQLBUNFqqT8";
    assert.deepEqual(normalizeSameAs([url, url]), [url]);
  });
  it("drops empty values", () => {
    assert.deepEqual(
      normalizeSameAs([null, undefined, "", "  ", "https://example.com"]),
      ["https://example.com/"]
    );
  });
  it("trims whitespace", () => {
    assert.deepEqual(normalizeSameAs(["  https://example.com/path  "]), [
      "https://example.com/path",
    ]);
  });
  it("collapses trailing slash duplicates", () => {
    assert.deepEqual(
      normalizeSameAs(["https://example.com/a", "https://example.com/a/"]),
      ["https://example.com/a"]
    );
  });
  it("rejects invalid URLs", () => {
    assert.deepEqual(normalizeSameAs(["not-a-url", "ftp://x.com", "https://ok.com"]), [
      "https://ok.com/",
    ]);
  });
});
