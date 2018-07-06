import { observable, computed, action } from 'mobx';

class Case {
    @observable caseId = '';
}
export default new Case;