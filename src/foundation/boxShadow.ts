import Offset from "./offsets";

class BoxShadow {
  color: string;
  offset: Offset;
  blurRadius: number;
  spreadRadius: number;

  constructor(
    color: string,
    offset: Offset,
    blurRadius: number,
    spreadRadius: number
  ) {
    this.color = color;
    this.offset = offset;
    this.blurRadius = blurRadius;
    this.spreadRadius = spreadRadius;
  }

  toString(): string {
    return `${this.offset.dx}px ${this.offset.dy}px ${this.blurRadius}px ${this.spreadRadius}px ${this.color}`;
  }
}

export default BoxShadow;
