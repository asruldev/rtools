interface IconOptions {
  type: 'text' | 'svg';
  name: string; // For text-based icons, it could represent the character or identifier
  size?: number;
  color?: string;
  fontFamily?: string; // Only required for text-based icons
  svgUrl?: string; // Only required for SVG icons
}

class Icon {
  type: 'text' | 'svg';
  name: string;
  size: number;
  color: string;
  fontFamily?: string;
  svgUrl?: string;

  constructor({
    type,
    name,
    size = 24,
    color = 'black',
    fontFamily,
    svgUrl,
  }: IconOptions) {
    this.type = type;
    this.name = name;
    this.size = size;
    this.color = color;
    this.fontFamily = fontFamily;
    this.svgUrl = svgUrl;
  }

  getContent(): string {
    if (this.type === 'text') {
      return this.name; // Return text-based icon name (character or identifier)
    } else if (this.type === 'svg' && this.svgUrl) {
      return this.svgUrl; // Return URL of SVG icon
    } else {
      return ''; // Handle other types or invalid scenarios
    }
  }

  toString(): string {
    if (this.type === 'text' && this.fontFamily) {
      return `
          font-family: ${this.fontFamily};
          font-size: ${this.size}px;
          color: ${this.color};
        `;
    } else if (this.type === 'svg') {
      return `
          width: ${this.size}px;
          height: ${this.size}px;
          fill: ${this.color};
        `;
    } else {
      return ''; // Handle other types or invalid scenarios
    }
  }
}

export default Icon;
