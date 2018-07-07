import React, { Component } from 'react';
import Header from './component/Header';
import pageStyle from '../page2.scss';
import './IntelligentUser.css';
class IntelligentUser extends Component {
    constructor (...args) {
        super (...args);
        this.state = {
            freeze: "none"
        };
    }
    componentDidMount() {
        document.title = window.SITE_NAME + ' - ' + '用户管理';
    }
    fnFreeze = () => {
        this.setState({ freeze: "block" });
    }
    fnCancel = () => {
        this.setState({ freeze: "none" });
    }
    fnEnsure = (aa) => {
        this.setState({ freeze: "none" });
        console.log("冻结当前用户");
    }
    render() {
        let aText = {
            user: "M123456789",
            type: "普通用户",
            static: "正常使用",
            time: "2018-5-23至2019-5-23"
        };
        return (
            <div className={pageStyle['page']} id="intelligentuser">
                <React.Fragment>
                    <div className={"box"} >
                        <ul>
                            <li>用户：{aText.user}</li>
                            <li>类型：{aText.type}</li>
                            <li>状态：{aText.static}</li>
                            <li>有效期：{aText.time}</li>
                            <a href="javascript:;" className="freeze" onClick={this.fnFreeze}>冻结</a>
                            <a href="javascript:;" className="del">删除</a>
                        </ul>
                    </div>
                    <div className="wrap" style={{ display: this.state.freeze }}>
                        <div className="content">
                            <p>确定要冻结该钥匙吗？</p>
                            <a href="javascript:;" className="ensure" onClick={this.fnEnsure}>确定</a>
                            <a href="javascript:;" className="cancel" onClick={this.fnCancel} >取消</a>
                        </div>
                    </div>
                </React.Fragment>
            </div>
        )
    }
}

export default IntelligentUser
