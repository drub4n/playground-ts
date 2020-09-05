export class Game {
  private rolls: number[] = Array(21);
  private currentRoll = 0;

  score(): number {
    let score = 0;
    let firstInFrame = 0;
    for (let frame = 0; frame < 10; frame++) {
      if (this.isStrike(firstInFrame)) {
        score += 10 + this.nextTwoBallsForStrike(firstInFrame);
        firstInFrame++;
      } else if (this.isSpare(firstInFrame)) {
        score += 10 + this.nextTwoBallsForSpare(firstInFrame);
        firstInFrame += 2;
      } else {
        score += this.twoBallsForFrame(firstInFrame);
        firstInFrame += 2;
      }
    }
    return score;
  }

  roll(pins: number) {
    this.rolls[this.currentRoll++] = pins;
  }

  private twoBallsForFrame(firstInFrame: number) {
    return this.rolls[firstInFrame] + this.rolls[firstInFrame + 1];
  }

  private isSpare(firstInFrame: number) {
    return this.rolls[firstInFrame] + this.rolls[firstInFrame + 1] === 10;
  }

  private nextTwoBallsForSpare(firstInFrame: number) {
    return this.rolls[firstInFrame + 2];
  }
  private isStrike(firstInFrame: number) {
    return this.rolls[firstInFrame] === 10;
  }

  private nextTwoBallsForStrike(firstInFrame: number) {
    return this.rolls[firstInFrame + 1] + this.rolls[firstInFrame + 2];
  }
}
