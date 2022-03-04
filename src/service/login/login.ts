import yhRequest from '../index'

import { Iaccount } from './type'
enum loginAPI {
  accountLogin = '/post'
}

export function accountLoginRequest(account: Iaccount) {
  return yhRequest.post({
    url: loginAPI.accountLogin,
    data: account
  })
}
