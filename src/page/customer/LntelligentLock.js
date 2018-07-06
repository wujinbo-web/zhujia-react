import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './lntelligentLock.scss';
import pageStyle from '../page.scss';
import InputBox from '../../component/common/InputBox';
import ApiHelper from "../../store/ApiHelper";
import { buyLockApply } from '../../constants/ApiTypes';
import { Toast } from 'antd-mobile';

class LntelligentLock extends Component {
    static propTypes = {
        history: PropTypes.object
    };

    async componentDidMount() {
        document.title = window.SITE_NAME + ' - ' + '预约安装';
        
    }
    saveAccount = async () => {
        console.log(this.userName.state.value);
        console.log(this.userPhone.state.value);
        console.log(this.userAdress.state.value);
        
        const data = {
            apply_name: this.userName.state.value, 
            phone: this.userPhone.state.value,
            apply_address: this.userAdress.state.value
        };
        Toast.loading();
        const result = await ApiHelper.requestGet(buyLockApply, data);
        Toast.hide();
        if (result.status) {
            console.log("success");
            console.log(result);
        } else {
            Toast.fail(result.msg, 1);
        }
    }

    render() {
        console.log("lntelligentLock");
        return (
            <div className={pageStyle['page']}>
                <React.Fragment>
                    <div>
                        <div>
                            <div className={style['button_installD']}>
                                <span>安装说明</span>
                            </div>
                        </div>
                        <div className={pageStyle['line']}>
                        </div>
                        <div className={style['info']}>
                            <InputBox title="预约人姓名" plac="请输入姓名" ref={(ref) => this.userName = ref} />
                            <InputBox name="userPhone" title="手机号" plac="请输入手机号" ref={(ref) => this.userPhone = ref} />
                            <InputBox name="userAdress" title="地址" plac="请输入地址" ref={(ref) => this.userAdress = ref} />
                        </div>  
                        <div className={pageStyle['line']}>
                        </div>
                        <div className={style['botton_box']}>
                            <div className={style['botton_down']} onClick={this.saveAccount}>
                                <span>提交预约</span>
                            </div>
                            <div className={style['botton_down']}>
                                <span>练习客服</span>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            </div>
        );
    }
}
export default LntelligentLock;