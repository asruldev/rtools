interface GridOptions {
  columns?: string | number;
  rows?: string | number;
  gap?: string;
  justifyItems?: string;
  alignItems?: string;
}

class Grid {
  gridTemplateColumns: string;
  gridTemplateRows: string;
  gridGap: string;
  justifyItems: string;
  alignItems: string;

  constructor({
    columns = '1fr',
    rows = 'auto',
    gap = '0',
    justifyItems = 'stretch',
    alignItems = 'stretch',
  }: GridOptions = {}) {
    this.gridTemplateColumns = this.formatGridValue(columns);
    this.gridTemplateRows = this.formatGridValue(rows);
    this.gridGap = gap;
    this.justifyItems = justifyItems;
    this.alignItems = alignItems;
  }

  private formatGridValue(value: string | number): string {
    if (typeof value === 'number') {
      return `repeat(${value}, 1fr)`;
    }
    return value.toString();
  }

  toString(): string {
    return `
        display: grid;
        grid-template-columns: ${this.gridTemplateColumns};
        grid-template-rows: ${this.gridTemplateRows};
        gap: ${this.gridGap};
        justify-items: ${this.justifyItems};
        align-items: ${this.alignItems};
      `;
  }
}

export default Grid;
