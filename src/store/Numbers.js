/**
 * Created by xiao on 2018/5/7.
 */
import { observable, computed, action } from 'mobx';

class Numbers {
    @observable num = 0;
    @observable loading = false;
    @observable time = Date.now() / 1000;
    @action.bound async asyncPlus() {
        const plus = () => new Promise((resolve, reject) => {
            this.loading = true;
            setTimeout(() => {
                this.num = this.num + 1;
                this.loading = false;
                this.time = Date.now() / 1000;
            }, 500);
        });
        await plus();
    }
    @computed get string() {
        return this.num + '次';
    }
}

export default new Numbers;