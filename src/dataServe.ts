import Keg, { colorCode } from "./Keg";

export default () => [
  new Keg(
    'Skull Crusher', 'Ale', 30,
    new colorCode(120, 80, 80, 1),
    4.6, 80,
    [
      'Green Mountain',
      'Silver Coast',
      'Juice Orange'
    ],
    4.50, 7, 13),
  new Keg(
    'Storm', 'Porter', 80,
    new colorCode(80, 80, 120, 1),
    4.6, 80,
    [
      'Green Mountain',
      'Silver Coast',
      'Juice Orange'
    ],
    4.50, 7, 13),
  new Keg(
    'Greenskin', 'Sour', 43,
    new colorCode(80, 120, 80, 1),
    8.2, 40,
    [
      'Old Grape',
      'Pulled Sun',
      'Frost Wing',
      'Old Crazy'
    ],
    7, 13, 25),
]