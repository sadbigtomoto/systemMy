import { Iform } from '@/base-ui/form'
export const formConfig: Iform = {
  labelWidth: '120px',
  itemStyle: {
    padding: '20px 60px'
  },
  colLayout: {
    span: 8
  },
  formItems: [
    {
      type: 'input',
      label: '用户名',
      rules: [],
      placeholder: '请输入用户名'
    },
    {
      type: 'password',
      label: '密码',
      rules: [],
      placeholder: '请输入用户名'
    },
    {
      type: 'select',
      label: '喜欢的运动',
      rules: [],
      placeholder: '请输入喜欢的运动',
      options: [{ title: '篮球', value: 'baskerball' }]
    },
    {
      type: 'datepicker',
      label: '日期',
      rules: [],
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ]
}
