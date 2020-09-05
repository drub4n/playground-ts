import { Game } from './bowling';

describe('bowling', () => {
  let g: Game;

  beforeEach(() => {
    g = new Game();
  });

  function rollmany(n: number, pins: number) {
    for (let i = 0; i < n; i++) {
      g.roll(pins);
    }
  }

  function rollSpare() {
    g.roll(5);
    g.roll(5);
  }

  function rollStrike() {
    g.roll(10);
  }

  it('can roll', () => {
    g.roll(0);
  });

  it('gutterGame', () => {
    rollmany(20, 0);
    expect(g.score()).toEqual(0);
  });

  it('allOnes', () => {
    rollmany(20, 1);
    expect(g.score()).toEqual(20);
  });

  it('oneSpare', () => {
    rollSpare();
    g.roll(3);
    rollmany(17, 0);
    expect(g.score()).toEqual(16);
  });

  it('oneStrike', () => {
    rollStrike();
    g.roll(3);
    g.roll(4);
    rollmany(16, 0);
    expect(g.score()).toEqual(24);
  });

  it('perfectGame', () => {
    rollmany(12, 10);
    expect(g.score()).toEqual(300);
  });
});
