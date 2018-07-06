import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './login.scss';
import pageStyle from '../page.scss';

class Login extends Component {

    async componentDidMount() {
        document.title = window.SITE_NAME + ' - ' + '用户登录';
    }

    render() {
        return (
            <div className={pageStyle['page']}>
                <React.Fragment>
                    <div className={style['logo_box']}>
                        <img src="/static/user/zhujiatubiao.png" />
                    </div>
                    <div className={style['content']}>
                        <div className={style['input_box']}>
                            <img src="/static/user/phone.png" className={style['sign']}/><input type="text" placeholder="手机号码"/>
                        </div>
                        <div className={style['input_box']}>
                            <img src="/static/user/password.png" className={style['sign']}/><input type="password" placeholder="密码"/><img src="/static/user/hidden.png" className={style['password_sign']}/>
                        </div>
                        <div>
                            <div className={style['button']}><span>登录</span></div>
                        </div>
                        <div className={style['regist_box']}><span>手机一键注册</span></div>
                    </div>
                </React.Fragment>
            </div>
        );
    }
}
export default Login;