export const rules = {
  phone: [
    {
      required: true,
      message: '手机号码必须输入',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: '输入精确号码',
      trigger: 'blur'
    }
  ],
  yanzheng: [
    {
      required: true,
      message: '验证码必须输入',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{6}$/,
      message: '输入六位验证码',
      trigger: 'blur'
    }
  ]
}
