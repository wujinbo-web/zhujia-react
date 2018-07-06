import React, { Component } from 'react';
import Header from './component/Header';
import pageStyle from '../page2.scss';
import DropList from './component/DropList';
import './OpenBroker.css';
class OpenBroker extends Component {
    constructor (...args) {
        super (...args);
        this.state = {
            tel: "",
            password: "",
            store: "",
            name: ""
        };
    }
    componentDidMount() {
        document.title = window.SITE_NAME + ' - ' + '人员';
    }
    fnSub = () => {

    }
    handleStore = (val) => {
        this.setState({ store: val });
        console.log(val);
    }
    render() {
        const store = {
            title: "请选择门店",
            list: [ "不限", "拱墅店", "明锐直营店", "太平门直营店" ]
        };
        return (
            <div className={pageStyle['page']}>
                <React.Fragment>
                    <div className={"box"} id="openbroker">
                        <Header title="开通经济人账号" />
                        <ul className="list">
                            <li className="a" >手机号：
                                <input type="text" />
                            </li>
                            <li className="a">密码：
                                <input type="text" />
                            </li>
                            <li className="a">所属门店：
                                <div className="wrap">
                                    <DropList data={store} handleStore={this.handleStore} />
                                </div>
                            </li>
                            <li className="a">真实姓名：
                                <input type="text" />
                            </li>
                            <a href="javascript:;" className="reset">取消</a>
                            <a href="javascript:;" className="sub" onClick={this.fnSub}>提交</a>
                        </ul>
                    </div>
                </React.Fragment>
            </div>
        )
    }
}

export default OpenBroker
