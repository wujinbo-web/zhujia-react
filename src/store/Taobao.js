/**
 * Created by xiao on 2018/5/26.
 */
import { observable, computed, action } from 'mobx';

class Taobao {
    @observable account = '';
}
export default new Taobao;