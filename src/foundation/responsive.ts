interface Breakpoints {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

class Responsive {
  breakpoints?: Breakpoints; // Make breakpoints optional

  constructor(breakpoints: Breakpoints = {}) {
    this.breakpoints = breakpoints;
  }

  getMediaQuery(breakpoint: keyof Breakpoints): string {
    const breakpoints = this.breakpoints || {}; // Use optional chaining here
    switch (breakpoint) {
      case 'xs':
        return `@media (max-width: ${breakpoints.sm! - 1}px)`;
      case 'sm':
        return `@media (min-width: ${breakpoints.sm!}px) and (max-width: ${breakpoints.md! -
          1}px)`;
      case 'md':
        return `@media (min-width: ${breakpoints.md!}px) and (max-width: ${breakpoints.lg! -
          1}px)`;
      case 'lg':
        return `@media (min-width: ${breakpoints.lg!}px) and (max-width: ${breakpoints.xl! -
          1}px)`;
      case 'xl':
        return `@media (min-width: ${breakpoints.xl!}px)`;
      default:
        return '';
    }
  }
}

export default Responsive;
