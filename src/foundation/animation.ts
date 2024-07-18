class Animation {
  name: string;
  duration: string;
  timingFunction: string;
  delay: string;
  iterationCount: string | number;
  direction: string;
  fillMode: string;
  playState: string;

  constructor(
    name: string = '',
    duration: string = '0s',
    timingFunction: string = 'ease',
    delay: string = '0s',
    iterationCount: string | number = 'infinite',
    direction: string = 'normal',
    fillMode: string = 'forwards',
    playState: string = 'running'
  ) {
    this.name = name;
    this.duration = duration;
    this.timingFunction = timingFunction;
    this.delay = delay;
    this.iterationCount = iterationCount;
    this.direction = direction;
    this.fillMode = fillMode;
    this.playState = playState;
  }

  toString(): string {
    return `${this.name} ${this.duration} ${this.timingFunction} ${this.delay} ${this.iterationCount} ${this.direction} ${this.fillMode} ${this.playState}`;
  }
}

export default Animation;
