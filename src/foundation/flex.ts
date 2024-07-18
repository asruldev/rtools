interface FlexOptions {
  direction?: string;
  justifyContent?: string;
  alignItems?: string;
  flexWrap?: string;
}

class Flex {
  flexDirection: string;
  justifyContent: string;
  alignItems: string;
  flexWrap: string;

  constructor({
    direction = 'row',
    justifyContent = 'flex-start',
    alignItems = 'stretch',
    flexWrap = 'nowrap',
  }: FlexOptions = {}) {
    this.flexDirection = direction;
    this.justifyContent = justifyContent;
    this.alignItems = alignItems;
    this.flexWrap = flexWrap;
  }

  toString(): string {
    return `
        display: flex;
        flex-direction: ${this.flexDirection};
        justify-content: ${this.justifyContent};
        align-items: ${this.alignItems};
        flex-wrap: ${this.flexWrap};
      `;
  }
}

export default Flex;
