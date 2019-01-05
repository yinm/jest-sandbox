test('check returns of Mock', () => {
  const myMock = jest.fn()
  console.log(myMock())

  myMock
    .mockReturnValueOnce(10)
    .mockReturnValueOnce('x')
    .mockReturnValue(true)

  console.log(myMock(), myMock(), myMock(), myMock())
})

