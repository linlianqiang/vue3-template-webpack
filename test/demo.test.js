function sum(a,b) {
  return a + b
} 

test('first jest',() => {
  const sums = sum(10,20)
  expect(sums).toBe(30)
})