import React, { Component } from 'react';
import Header from './component/Header';
import Electricity from './component/Electricity';
import pageStyle from '../page2.scss';
import './IntelligentInfo.css';
class IntelligentInfo extends Component {
    constructor (...args) {
        super (...args);
    }
    componentDidMount() {
        document.title = window.SITE_NAME + ' - ' + '智能锁';
    }
    render() {
        let userInfo = {
            id: "M123456",
            account: "NBG789",
            user: "王晓晓",
            electricity: 20
        };
        return (
            <div className={pageStyle['page']}>
                <React.Fragment>
                    <div className={"box"} id="intelligentinfo">
                        <Header title="智能锁信息" />
                        <ul>
                            <li>锁ID：{userInfo.id}</li>
                            <li>管理账号：{userInfo.account}</li>
                            <li>管理员：{userInfo.user}</li>
                            <li>绑定房源：<a href="javascript:;" className="cancel" >取消绑定</a></li>
                            <a href="javascript:;" className="send" >发送钥匙</a>
                            <a href="javascript:;" className="management" >用户管理</a>
                            <a href="javascript:;" className="record" >开锁记录</a>
                            <Electricity num={userInfo.electricity} />
                        </ul>
                    </div>
                </React.Fragment>
            </div>
        )
    }
}

export default IntelligentInfo
