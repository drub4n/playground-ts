const KRAPEKAR_CONSTANT = 6174;

export const krapekar = (input: number): number => {
  const ascendingInput = parseInt(
    input
      .toString()
      .split('')
      .sort((a, b) => parseInt(a) - parseInt(b))
      .join(''),
  );
  const descendingInput = parseInt(
    input
      .toString()
      .padEnd(4, '0')
      .split('')
      .sort((a, b) => parseInt(b) - parseInt(a))
      .join(''),
  );

  return descendingInput - ascendingInput;
};

export const countKrapekarIteration = (input: number): number => {
  if (isInvalidInput(input)) {
    throw new Error('input is a 4 digit number with two different digit leading zero count');
  }
  let i = 0;
  while (input !== KRAPEKAR_CONSTANT) {
    i++;
    input = krapekar(input);
  }
  return i;
};

const isInvalidInput = (input: number): boolean => {
  if (input <= 0 || input.toString().length > 4 || new Set(input.toString().padEnd(4, '0').split('')).size <= 1) {
    return true;
  }
  return false;
};
