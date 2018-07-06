import { observable, computed, action } from 'mobx';

class HotSearch {
    @observable content = '';
}
export default new HotSearch;