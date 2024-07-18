class Typography {
  fontSize: string;
  fontFamily: string;
  fontWeight: number;
  lineHeight: number | string;
  letterSpacing: string;

  constructor(
    fontSize: string = '16px',
    fontFamily: string = 'Arial, sans-serif',
    fontWeight: number = 400,
    lineHeight: number | string = 'normal',
    letterSpacing: string = 'normal'
  ) {
    this.fontSize = fontSize;
    this.fontFamily = fontFamily;
    this.fontWeight = fontWeight;
    this.lineHeight = lineHeight;
    this.letterSpacing = letterSpacing;
  }

  toString(): string {
    return `${this.fontSize} ${this.fontWeight} ${this.fontFamily}; line-height: ${this.lineHeight}; letter-spacing: ${this.letterSpacing};`;
  }
}

export default Typography;
