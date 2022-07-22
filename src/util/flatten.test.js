import { flattenObject } from './flatten';

describe('flattenObject', () => {
  it('should flatten a nested object by dot separation', () => {
    const obj1 = { foo: { bar: 'foobar' } };
    const obj2 = { foo: { bar: { fizz: 'foobarfizz' } } };

    expect(flattenObject(obj1)).toStrictEqual({ 'foo.bar': 'foobar' });
    expect(flattenObject(obj2)).toStrictEqual({ 'foo.bar.fizz': 'foobarfizz' });
  });
});

describe('flattenCpe', () => {
  it('should flatten a cpe object by dot separation', () => {
    const cpe1 = {
      username: 'foo',
      password: 'bar',
      protocol: 'foobar',
      references: 'fizzbang',
      cpe: {
        part: 'a',
        vendor: 'b',
        product: 'c',
        version: 'd',
        update: 'e',
        edition: 'f',
        language: 'g',
      },
    };

    expect(flattenObject(cpe1)).toStrictEqual({
      username: 'foo',
      password: 'bar',
      protocol: 'foobar',
      references: 'fizzbang',
      'cpe.part': 'a',
      'cpe.vendor': 'b',
      'cpe.product': 'c',
      'cpe.version': 'd',
      'cpe.update': 'e',
      'cpe.edition': 'f',
      'cpe.language': 'g',
    });
  });
});
