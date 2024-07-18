interface PositionOptions {
  position?: string;
  top?: string | number;
  right?: string | number;
  bottom?: string | number;
  left?: string | number;
  zIndex?: number;
}

class Position {
  position: string;
  top: string | number;
  right: string | number;
  bottom: string | number;
  left: string | number;
  zIndex: number | undefined;

  constructor({
    position = 'relative',
    top = 'auto',
    right = 'auto',
    bottom = 'auto',
    left = 'auto',
    zIndex,
  }: PositionOptions = {}) {
    this.position = position;
    this.top = top;
    this.right = right;
    this.bottom = bottom;
    this.left = left;
    this.zIndex = zIndex;
  }

  toString(): string {
    const styles: string[] = [];

    if (this.position) {
      styles.push(`position: ${this.position}`);
    }
    if (this.top !== 'auto') {
      styles.push(`top: ${this.top}px`);
    }
    if (this.right !== 'auto') {
      styles.push(`right: ${this.right}px`);
    }
    if (this.bottom !== 'auto') {
      styles.push(`bottom: ${this.bottom}px`);
    }
    if (this.left !== 'auto') {
      styles.push(`left: ${this.left}px`);
    }
    if (typeof this.zIndex === 'number') {
      styles.push(`z-index: ${this.zIndex}`);
    }

    return styles.join('; ');
  }
}

export default Position;
