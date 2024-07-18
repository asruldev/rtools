class Transform {
  translateX: string | number;
  translateY: string | number;
  rotate: string | number;
  scaleX: string | number;
  scaleY: string | number;
  skewX: string | number;
  skewY: string | number;

  constructor(
    translateX: string | number = '0',
    translateY: string | number = '0',
    rotate: string | number = '0',
    scaleX: string | number = '1',
    scaleY: string | number = '1',
    skewX: string | number = '0',
    skewY: string | number = '0'
  ) {
    this.translateX = this.formatValue(translateX);
    this.translateY = this.formatValue(translateY);
    this.rotate = this.formatValue(rotate);
    this.scaleX = this.formatValue(scaleX);
    this.scaleY = this.formatValue(scaleY);
    this.skewX = this.formatValue(skewX);
    this.skewY = this.formatValue(skewY);
  }

  private formatValue(value: string | number): string | number {
    if (typeof value === 'number') {
      return value;
    }
    return value;
  }

  toString(): string {
    return `translate(${this.translateX}, ${this.translateY}) rotate(${this.rotate}) scale(${this.scaleX}, ${this.scaleY}) skew(${this.skewX}, ${this.skewY})`;
  }
}

export default Transform;
