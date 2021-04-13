import Row from '../src/row.js';

describe('Row()', () => {
  let row;
  beforeEach(() => {
    row = new Row();
  })

  test('should correctly create a row with a value array of 3 items', () => {
    expect(row.values.length).toEqual(3);
  });

  test('should insert number into given index', () => {
    row.addNumber(2, 1);
    expect(row.values[1]).toEqual(2);
  });

  test('should return false if passed a non-number argument', () => {
    row.addNumber("hello", 0);
    expect(row.values.length[0]).toEqual(undefined);
  });

  test('should return false if index value is not between 0 - 2', () => {
    row.addNumber(3, 4);
    expect(row.values).toEqual([undefined, undefined, undefined]);
  });
});