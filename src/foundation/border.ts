class Border {
  width: number;
  style: string;
  color: string;

  constructor(width: number, style: string, color: string) {
    this.width = width;
    this.style = style;
    this.color = color;
  }

  toString(): string {
    return `${this.width}px ${this.style} ${this.color}`;
  }
}

export default Border;
