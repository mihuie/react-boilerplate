import { expect } from 'chai';

import { allHaveValues } from './object';

describe('allHaveValues', () => {
  const scenarios = [
    {
      title: 'all fields empty',
      input: { a: undefined,  b: undefined,  c: undefined,  d: undefined},
      expected: false
    },
    {
      title: 'all fields complete',
      input: { a: 'foo',  b: 'foo',  c: 'foo',  d: 'foo'},
      expected: true
    },
    {
      title: 'some fields complete',
      input: { a: undefined, b: '', c: 'foo', d: 'foo'},
      expected: false
    },
    {
      title: 'one field empty string',
      input: {a: 'foo', b: '', c: 'foo', d: 'foo'},
      expected: false
    },
    {
      title: 'one field space only',
      input: {a: 'foo', b: ' ', c: 'foo', d: 'foo'},
      expected: false
    },
  ];

  scenarios.map(({ title, input, expected }) => {
    describe(title, () => {
      const actual = allHaveValues(input);
      it(`evaluates to ${expected}`, () => {
        expect(actual).to.equal(expected);
      });
    });
  });

});
