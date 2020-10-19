// 单元测试：对某个功能或接口
test('http test', async () => {
  const res = request(server).get('/api')
  // 得到的结果是否是期望的。

  expect(res).toEauql({
    title: '博客标题',
    id: '1'
  })
  expect(sum).toBe(30)
})