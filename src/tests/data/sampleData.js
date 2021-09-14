
export const sampleVendors = [
  "foo_vend",
  "bar_vend",
];

export const sampleProducts = [
  "foo_prod",
  "bar_prod",
];

export const sampleCredential = [
  {
    cpe: "cpe:/a:b:c",
    username: "foo_user",
    product: "foo_prod",
    vendor: "foo_vendor",
    version: "foo_version",
    language: "foo_lang",
    update: "foo_update",
    edition:"foo_edition",
    part:"foo_part",
    references:["foo_ref1", "bar_ref2"],
    protocol:"foo_protocol",
    password:"foo_password"
  },
  {
    cpe: "cpe:/o:foo:bar:fizz:bang",
    username: "bar_user",
    product: "bar_prod",
    vendor: "bar_vendor",
    version: "bar_version",
    language: "bar_lang",
    update: "bar_update",
    edition:"bar_edition",
    part:"bar_part",
    references:["bar_ref1", "foo_ref2"],
    protocol:"bar_protocol",
    password:"bar_password"
  },
];

export const sampleCredentials = [
  {
    cpe: "cpe:/a:b:c",
    username: "abc",
    password: "123",
  }
];
