import React, { Component } from 'react';
import Header from './component/Header';
import Electricity from './component/Electricity';
import pageStyle from '../page2.scss';
import './IntelligentLock.css';
class IntelligentLock extends Component {
    constructor (...args) {
        super (...args);
    }
    componentDidMount() {
        document.title = window.SITE_NAME + ' - ' + '智能锁';
    }
    render() {
        let listData = [
            { id: "M456789", account: "NBG789", user: "王晓晓", electricity: 0 },
            { id: "M456790", account: "NBG789", user: "王晓晓2", electricity: 20 },
            { id: "M456710", account: "NBG789", user: "王晓晓3", electricity: 40 },
            { id: "M456722", account: "NBG789", user: "王晓晓4", electricity: 60 },
            { id: "M456733", account: "NBG789", user: "王晓晓5", electricity: 100 }
        ];
        let ulComp = (
            listData.map( item => {
                return (
                    <ul key={item.id}>
                        <li>锁ID:{item.id}</li>
                        <li>管理账号:{item.account}</li>
                        <li>管理员:{item.user}</li>
                        <Electricity num={item.electricity} className="aaa" />
                    </ul>
                )
            })
        )
        return (
            <div className={pageStyle['page']} id="intelligentlock">
                <React.Fragment>
                    <div className={"box"} id="intelligentlock">
                        <Header title="智能锁" />
                        <div className="menu">
                            <input type="text" placeholder="请输入要搜素的小区/房源" />
                            <a href="#">购买</a>
                        </div>
                        <div className="list">
                            { ulComp }
                        </div>
                    </div>
                </React.Fragment>
            </div>
        )
    }
}

export default IntelligentLock
