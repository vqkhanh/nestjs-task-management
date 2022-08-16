function addNumber(num1, num2) {
  return num1 + num2;
}

describe('example test', () => {
  it('addNumbers', () => {
    expect(addNumber(2, 2)).toEqual(4);
  });
});
