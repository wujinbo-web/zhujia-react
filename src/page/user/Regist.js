import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './regist.scss';
import pageStyle from '../page.scss';

class Regist extends Component {

    async componentDidMount() {
        document.title = window.SITE_NAME + ' - ' + '用户注册';
        
    }

    render() {
        return (
            <div className={pageStyle['page']}>
                <React.Fragment>
                    <div className={style['back']}>
                        <div className={style['back_header']}></div>
                        <div className={style['back_bottom']}></div>
                    </div>
                    <div className={style['content']}>
                        <div className={style['info']}>
                            <div className={style['info_item']}>
                                <div><span>手机号码</span><input type="text" /></div>
                            </div>
                            <div className={style['info_item_ver']}>
                                <div><span className={style['item_span']}>验证码</span><input type="text" /><span className={style['item_ver']}>获取验证码</span></div>
                            </div>
                            <div className={style['info_item']}>
                                <div><span>登录密码</span><input type="text" placeholder="6 - 18位数字加字母组合"/></div>
                            </div>
                            <div className={style['info_item']}>
                                <div><span>确认密码</span><input type="text" placeholder="请再次输入登录密码"/></div>
                            </div>
                        </div>
                        <div className={style['Agreement']}><span>注册住家账号即表示您同意住家用户协议</span></div>
                        <div className={style['button']}><span>立即注册</span></div>
                    </div>
                </React.Fragment>
            </div>
        );
    }
}
export default Regist;