import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './declarationForm.scss';
import pageStyle from '../page.scss';
import InputBox from '../../component/common/InputBox';
import InputAreaBox from '../../component/common/InputAreaBox';
import ApiHelper from "../../store/ApiHelper";
import { buyLockApply } from '../../constants/ApiTypes';
import { Toast } from 'antd-mobile';

class DeclarationForm extends Component {

    static propTypes = {
        history: PropTypes.object
    };

    async componentDidMount() {
        document.title = window.SITE_NAME + ' - ' + '报修单';
    }

    saveAccount = async () => {
        console.log(this.userName.state.value);
        console.log(this.userPhone.state.value);
        console.log(this.userAdress.state.value);
        console.log(this.type.state.value);

        const data = {
            userName: this.userName.state.value,
            userPhone: this.userPhone.state.value,
            userAdress: this.userAdress.state.value,
            type: this.type.state.value
        };
        Toast.loading();
        const result = await ApiHelper.requestPost(buyLockApply, data);
        Toast.hide();
        if (result.code == 0) {
            console.log("success");
        } else {
            Toast.fail(result.msg, 1);
        }
    }

    render() {
        console.log("declarationForm");
        return (
            <div className={pageStyle['page']}>
                <React.Fragment>
                    <div className={style['form_body']}>
                        <InputBox title="报修人姓名" plac="请输入姓名" ref={(ref) => this.userName = ref} />
                        <div className={style['line']}></div>
                        <InputBox title="手机号" plac="请输入手机号" ref={(ref) => this.userPhone = ref} />
                        <div className={style['line']}></div>
                        <InputBox title="报修地址" plac="请输入地址" ref={(ref) => this.userAdress = ref} />
                        <div className={style['line']}></div>
                        <InputBox title="选择保修类型" plac="请输入保修类型" ref={(ref) => this.type = ref} />
                        <div className={style['line']}></div>
                        <InputAreaBox title="填写详细信息" plac="" />
                        <div className={style['line']}></div>
                        <div className={style['image_box']}>
                            <div className={style['image_div']}><img src="/static/landlord/shangchuantupianD.png"/></div>

                        </div>
                        <div className={style['botton_down']}>
                            <span>提交信息</span>
                        </div>
                    </div>
                </React.Fragment>
            </div>
        );
    }
}
export default DeclarationForm;
