import { expect } from 'chai';

import { getSortedList, SORT_ASCENDING, SORT_DESCENDING, SORT_UNSORTED } from './listUtils';

describe('listUtils', () => {
  describe('getSortedList', () => {
    const srcList = [{name: 'B'}, {name: 'C'}, {name: 'A'}];

    describe('unsorted', () => {
      const expected = [{name: 'B'}, {name: 'C'}, {name: 'A'}];
      it('returns an array', () => {
        expect(getSortedList(srcList, 'name')).to.be.an('array');
      });

      it('returns an unsorted list', () => {
        expect(getSortedList(srcList, 'name', SORT_UNSORTED)).to.deep.equal(expected);
      });
    });

    describe('sorted ascending', () => {
      const expected = [{name: 'A'}, {name: 'B'}, {name: 'C'}];
      it('returns an array', () => {
        expect(getSortedList(srcList, 'name')).to.be.an('array');
      });

      it('returns a sorted list', () => {
        expect(getSortedList(srcList, 'name', SORT_ASCENDING)).to.deep.equal(expected);
      });
    });

    describe('sorted descending', () => {
      const expected = [{name: 'C'}, {name: 'B'}, {name: 'A'}];
      it('returns an array', () => {
        expect(getSortedList(srcList, 'name')).to.be.an('array');
      });

      it('returns a sorted list', () => {
        expect(getSortedList(srcList, 'name', SORT_DESCENDING)).to.deep.equal(expected);
      });
    });
  });
});
