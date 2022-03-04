export const rules = {
  name: [
    {
      required: true,
      message: '账号必须输入',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: '输入五到十位账号',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '密码必须输入',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: '输入五到十位账号',
      trigger: 'blur'
    }
  ]
}
