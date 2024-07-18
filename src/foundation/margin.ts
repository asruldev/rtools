class Margin {
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
    this.top = this.formatMarginValue(top, unit);
    this.right = this.formatMarginValue(right, unit);
    this.bottom = this.formatMarginValue(bottom, unit);
    this.left = this.formatMarginValue(left, unit);
  }

  private formatMarginValue(value: number | string, unit: string): string {
    if (typeof value === 'number') {
      return `${value}${unit}`;
    }
    return value;
  }

  toString(): string {
    return `${this.top} ${this.right} ${this.bottom} ${this.left}`;
  }
}

export default Margin;
