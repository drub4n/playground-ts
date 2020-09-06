import { countKrapekarIteration, krapekar } from './krapekar';

describe('krapekar', () => {
  describe('Krapekar Function', () => {
    it('return 3087 when given 123 as input', () => {
      expect(krapekar(123)).toEqual(3087);
    });

    it('return 8352 when given 3087 as input', () => {
      expect(krapekar(3087)).toEqual(8352);
    });

    it('return 6174 when given 8352 as input', () => {
      expect(krapekar(8352)).toEqual(6174);
    });
  });

  describe('Count Iteration to get to krapekar constant', () => {
    it('count 3 iteration for 123', () => {
      expect(countKrapekarIteration(123)).toEqual(3);
    });

    it('count 7 iteration for 124', () => {
      expect(countKrapekarIteration(124)).toEqual(7);
    });
    it('count 4 iteration for 2334', () => {
      expect(countKrapekarIteration(2334)).toEqual(4);
    });
    it('count 6 iteration for 1337', () => {
      expect(countKrapekarIteration(1337)).toEqual(6);
    });

    it('throw an error with one distinct digit input', () => {
      const bla = () => countKrapekarIteration(1111);
      expect(bla).toThrowError(new Error('input is a 4 digit number with two different digit leading zero count'));
    });

    it('throws an error with a 4+ digit number', () => {
      const bla = () => countKrapekarIteration(111122);
      expect(bla).toThrowError(new Error('input is a 4 digit number with two different digit leading zero count'));
    });
  });
});
