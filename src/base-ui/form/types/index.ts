type IformType = 'input' | 'password' | 'select' | 'datepicker'

export interface IformItem {
  type: IformType
  label: string
  rules?: any[]
  placeholder?: any
  options?: any[]
  otherOptions?: any
}

export interface Iform {
  formItems: IformItem[]
  labelWidth?: string
  colLayout: any
  itemStyle: any
}
