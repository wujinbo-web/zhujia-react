import React, { Component } from 'react';
import Header from './component/Header';
import pageStyle from '../page2.scss';
import './OpenAccount.css';
class OpenAccount extends Component {
    constructor (...args) {
        super (...args);
    }
    componentDidMount() {
        document.title = window.SITE_NAME + ' - ' + '人员';
    }
    render() {
        return (
            <div className={pageStyle['page']}>
                <React.Fragment>
                    <div className={"box"} id="openaccount">
                        <Header title="开通门店账号" />
                        <ul className="list">
                            <li>账户名：
                                <input type="text" />
                            </li>
                            <li>密码：
                                <input type="text" />
                            </li>
                            <li>所在地区：
                                <select className="dropdown">
                                    <option style={{ display: "none" }}>请选择地区</option>
                                    <option className="list_item">西湖区</option>
                                    <option className="list_item">上城区</option>
                                    <option className="list_item">下城区</option>
                                </select>
                            </li>
                            <li>门店名称：
                                <input type="text" />
                            </li>
                            <li>门店地址：
                                <input type="text" />
                            </li>
                            <li>门店别称：
                                <input type="text" />
                            </li>
                            <li>联系电话：
                                <input type="text" />
                            </li>
                            <a href="javascript:;" className="reset">取消</a>
                            <a href="javascript:;" className="sub">提交</a>
                        </ul>
                    </div>
                </React.Fragment>
            </div>
        )
    }
}

export default OpenAccount
