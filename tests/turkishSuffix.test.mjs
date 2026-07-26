import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { getTurkishLocative } from "../lib/utils/turkishSuffix.ts";

describe("getTurkishLocative", () => {
  it("Adalar -> Adalar'da", () => {
    assert.equal(getTurkishLocative("Adalar"), "Adalar'da");
  });
  it("Beşiktaş -> Beşiktaş'ta", () => {
    assert.equal(getTurkishLocative("Beşiktaş"), "Beşiktaş'ta");
  });
  it("Kadıköy -> Kadıköy'de", () => {
    assert.equal(getTurkishLocative("Kadıköy"), "Kadıköy'de");
  });
  it("Şişli -> Şişli'de", () => {
    assert.equal(getTurkishLocative("Şişli"), "Şişli'de");
  });
  it("Kağıthane -> Kağıthane'de", () => {
    assert.equal(getTurkishLocative("Kağıthane"), "Kağıthane'de");
  });
  it("Üsküdar -> Üsküdar'da", () => {
    assert.equal(getTurkishLocative("Üsküdar"), "Üsküdar'da");
  });
  it("Ataşehir -> Ataşehir'de", () => {
    assert.equal(getTurkishLocative("Ataşehir"), "Ataşehir'de");
  });
  it("Bakırköy -> Bakırköy'de", () => {
    assert.equal(getTurkishLocative("Bakırköy"), "Bakırköy'de");
  });
  it("Beyoğlu -> Beyoğlu'nda", () => {
    assert.equal(getTurkishLocative("Beyoğlu"), "Beyoğlu'nda");
  });
  it("Zeytinburnu -> Zeytinburnu'nda", () => {
    assert.equal(getTurkishLocative("Zeytinburnu"), "Zeytinburnu'nda");
  });
  it("empty string", () => {
    assert.equal(getTurkishLocative(""), "");
    assert.equal(getTurkishLocative("   "), "");
  });
  it("trims whitespace", () => {
    assert.equal(getTurkishLocative("  Şişli  "), "Şişli'de");
  });
});
