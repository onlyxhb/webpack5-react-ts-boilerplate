import { observable, action } from 'mobx'

class Test {
    @observable data:string = ''
    @action setData(value:string) {
        this.data =  value
    }
}
let store =  new Test()
export default store