import BoxShadow from './boxShadow';
import Offset from './offsets';

class Shadows {
  static readonly elevation0 = new BoxShadow(
    'transparent',
    new Offset(0, 0),
    0,
    0
  ).toString();

  static readonly elevation1 = new BoxShadow(
    'rgba(0, 0, 0, 0.2)',
    new Offset(0, 1),
    3,
    0
  ).toString();

  static readonly elevation2 = new BoxShadow(
    'rgba(0, 0, 0, 0.2)',
    new Offset(0, 2),
    6,
    0
  ).toString();

  static readonly elevation3 = new BoxShadow(
    'rgba(0, 0, 0, 0.2)',
    new Offset(0, 3),
    8,
    0
  ).toString();

  static readonly elevation4 = new BoxShadow(
    'rgba(0, 0, 0, 0.2)',
    new Offset(0, 4),
    12,
    0
  ).toString();

  static readonly elevation6 = new BoxShadow(
    'rgba(0, 0, 0, 0.2)',
    new Offset(0, 6),
    16,
    0
  ).toString();

  static readonly elevation8 = new BoxShadow(
    'rgba(0, 0, 0, 0.2)',
    new Offset(0, 8),
    24,
    0
  ).toString();

  static readonly elevation12 = new BoxShadow(
    'rgba(0, 0, 0, 0.2)',
    new Offset(0, 12),
    32,
    0
  ).toString();

  static readonly elevation16 = new BoxShadow(
    'rgba(0, 0, 0, 0.2)',
    new Offset(0, 16),
    48,
    0
  ).toString();

  static readonly elevation24 = new BoxShadow(
    'rgba(0, 0, 0, 0.2)',
    new Offset(0, 24),
    64,
    0
  ).toString();
}

export default Shadows;
