class Padding {
  top: string;
  right: string;
  bottom: string;
  left: string;

  constructor(
    top: number | string,
    right: number | string,
    bottom: number | string,
    left: number | string,
    unit: 'px' | 'em' | 'rem' = 'px'
  ) {
    this.top = this.formatPaddingValue(top, unit);
    this.right = this.formatPaddingValue(right, unit);
    this.bottom = this.formatPaddingValue(bottom, unit);
    this.left = this.formatPaddingValue(left, unit);
  }

  private formatPaddingValue(value: number | string, unit: string): string {
    if (typeof value === 'number') {
      return `${value}${unit}`;
    }
    return value;
  }

  toString(): string {
    return `${this.top} ${this.right} ${this.bottom} ${this.left}`;
  }
}

export default Padding;

//new Padding(10, 20, 10, 20, 'px');
