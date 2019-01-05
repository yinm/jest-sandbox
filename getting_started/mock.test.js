test('check mock', () => {
  const myMockFn = jest
    .fn()
    .mockReturnValue('default')
    .mockImplementation(scalar => 42 + scalar)
    .mockName('add42')

  expect(myMockFn(10)).toBe(52)
})
