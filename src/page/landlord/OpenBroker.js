import React, { Component } from 'react';
import pageStyle from '../page2.scss';
import DropList from './component/DropList';
import './OpenBroker.css';
import { Toast } from 'antd-mobile';
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
        document.title = window.SITE_NAME + ' - ' + '开通经纪人账号';
    }
    fnSub = () => {
        let telreg = /^[1][3,4,5,7,8][0-9]{9}$/;
        let passreg = /^[A-Za-z]+[0-9]+[A-Za-z0-9]*|[0-9]+[A-Za-z]+[A-Za-z0-9]*$/g;
        let namereg = /^[\u4E00-\u9FA5A-Za-z]+$/;
        if ( ! telreg.test(this.state.tel) ) {
            if (this.state.tel == "" ) {
                Toast.info('手机号码不能为空', 1);
            } else {
                Toast.info('请输入正确的手机号格式', 1);
            }
        } else if ( ! passreg.test(this.state.password) ) {
            if (this.state.password == "") {
                Toast.info('密码不能为空', 1);
            } else {
                Toast.info('密码必须由6-16个英文字母和数字的字符串组成', 1);
            }

        } else if ( this.state.store == "" ) {
            Toast.info('请选择所属门店', 1);
        } else if ( ! namereg.test(this.state.name) ) {
            if (this.state.name == "") {
                Toast.info('姓名不能为空', 1);
            } else {
                Toast.info('只能输入中文和英文', 1);
            }
        } else {
            console.log(this.state.tel, this.state.password, this.state.store, this.state.name);
        }
    }
    handleStore = (val) => {                //获取所属门店列表值
        this.setState({ store: val });
    }
    fnTel = (ev) => {
        this.setState({ tel: ev.target.value });  //获取手机号
    }
    fnPassWord = (ev) => {
        this.setState({ password: ev.target.value }); //获取密码
    }
    fnName = (ev) => {
        this.setState({ name: ev.target.value });  //获取姓名
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
                        <ul className="list">
                            <li className="a" >手机号：
                                <input type="text"  onChange={this.fnTel}/>
                            </li>
                            <li className="a" >密码：
                                <input type="text" onChange={this.fnPassWord} />
                            </li>
                            <li className="a">所属门店：
                                <div className="wrap">
                                    <DropList data={store} handleStore={this.handleStore} />
                                </div>
                            </li>
                            <li className="a">真实姓名：
                                <input type="text" onChange={this.fnName} />
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
