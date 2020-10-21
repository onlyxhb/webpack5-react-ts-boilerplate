/** @format */

import { observable, action } from 'mobx'

interface UserInfo {
  name: string
  avatar: string
  phone: number
  status: number
}

class UserStore {
  @observable userInfo: UserInfo = {
    name: '',
    avatar: '',
    phone: 110,
    status: 1
  }

  @action
  getUserInfo = () => {
    // todo
    console.log('getUserInfo')
  }

  @action
  setUserInfo = (userInfo: UserInfo) => {
    console.log('setUserInfo')
    this.userInfo = userInfo
  }
}

export default new UserStore()

export { UserStore }
