import React, { Component } from 'react';
import Header from './component/Header';
import pageStyle from '../page2.scss';
import './SendKey.css';
class SendKey extends Component {
    constructor (...args) {
        super (...args);
        this.state = {
            foreveryKey: false,        //判断是否为永久钥匙
            startTime: '',
            endTime: '',
            user: ''
        };
    }
    componentDidMount() {
        document.title = window.SITE_NAME + ' - ' + '智能锁';
    }
    fnLimitKey = () => {
        this.setState({ foreveryKey: false });
    }
    fnForeveryKey = () => {
        this.setState({ foreveryKey: true });
    }
    fnStartTime = (ev) => {
        this.setState({ startTime: ev.target.value });
    }
    fnEndTime = (ev) => {
        this.setState({ endTime: ev.target.value });
    }
    fnUser = (ev) => {
        this.setState({ user: ev.target.value });
    }
    fnSend = () => {
        let key = this.state.foreveryKey ? "永久钥匙" : "限时钥匙";
        console.log(`权限为：${key},起始时间:${this.state.startTime},结束时间:${this.state.endTime},用户为：${this.state.user}`);
    }
    render() {
        return (
            <div className={pageStyle['page']}>
                <React.Fragment>
                    <div className={"box"} id="sendkey">
                        <Header title="发送钥匙" />
                        <ul>
                            <li className="type">
                                钥匙类型：
                                <p>
                                    <a href="javascript:;" className={this.state.foreveryKey ? "" : "active"} onClick={ this.fnLimitKey } >限时钥匙</a>
                                    <a href="javascript:;" className={this.state.foreveryKey ? "active" : ""} onClick={ this.fnForeveryKey }>永久钥匙</a>
                                </p>
                            </li>
                            <li className="time">
                                生效时间：
                                <p>
                                    <input type="text" onChange={this.fnStartTime} />
                                    <span></span>
                                    <input type="text" onChange={this.fnEndTime}/>
                                </p>
                            </li>
                            <li className="user">
                                账号：
                                <p>
                                    <input type="text" placeholder="请输入对方住家账号或者手机号" onChange={this.fnUser} />
                                </p>
                            </li>
                            <a href="javascript:;" className="send" onClick={ this.fnSend } >发送</a>
                        </ul>
                    </div>
                </React.Fragment>
            </div>
        )
    }
}

export default SendKey
