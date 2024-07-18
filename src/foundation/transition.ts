class Transition {
  property: string;
  duration: string;
  timingFunction: string;
  delay: string;

  constructor(
    property: string = 'all',
    duration: string = '0.3s',
    timingFunction: string = 'ease',
    delay: string = '0s'
  ) {
    this.property = property;
    this.duration = duration;
    this.timingFunction = timingFunction;
    this.delay = delay;
  }

  toString(): string {
    return `${this.property} ${this.duration} ${this.timingFunction} ${this.delay}`;
  }
}

export default Transition;
