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
    row.addNumberToRow(2, 1);
    expect(row.values[1]).toEqual(2);
  });

  test('should return undefined if passed a non-number argument', () => {
    row.addNumberToRow("hello", 0);
    expect(row.values.length[0]).toEqual(undefined);
  });

  test('should return undefined array if index value is not between 0 - 2', () => {
    row.addNumberToRow(3, 4);
    expect(row.values).toEqual([undefined, undefined, undefined]);
  });

  test('should return undefined array if number is not between 1-9', () => {
    row.addNumberToRow(10, 1);
    expect(row.values).toEqual([undefined, undefined, undefined]);
  });

  test('should loop through the rows numbers to determine if the numbers match, if they do match return "These numbers match"', () => {
    row.addNumberToRow(8, 2);
    row.addNumberToRow(8, 1);
    expect(row.values).toEqual([undefined, undefined, 8]);
  });
});

