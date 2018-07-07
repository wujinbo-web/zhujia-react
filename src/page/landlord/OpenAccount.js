import React, { Component } from 'react';
import Header from './component/Header';
import pageStyle from '../page2.scss';
import './OpenAccount.css';
import DropList from './component/DropList';
import { Toast } from 'antd-mobile';
class OpenAccount extends Component {
    constructor (...args) {
        super (...args);
        this.state = {
            userName: "",    //账户名
            passWord: "",    //密码
            location: "",    //所在地区
            storeName: "",   //门店名称
            storeAdress: "",  //门店地址
            storeAlias: "",   //门店别称
            tel: ""           //联系电话
        };
    }
    componentDidMount() {
        document.title = window.SITE_NAME + ' - ' + '开通门店账号';
    }
    fnUserName = (ev) => {
        this.setState({ userName: ev.target.value }); //获取账户名
    }
    fnPassWord = (ev) => {
        this.setState({ passWord: ev.target.value });//获取密码
    }
    handleStore = (val) => {
        this.setState({ location: val });  //获取地区列表值
    }
    fnStoreName = (ev) => {
        this.setState({ storeName: ev.target.value });//获取门店名称
    }
    fnStoreAdress = (ev) => {
        this.setState({ storeAdress: ev.target.value });//获取门店地址
    }
    fnStoreAlias = (ev) => {
        this.setState({ storeAlias: ev.target.value });//获取门店别称
    }
    fnTel = (ev) => {
        this.setState({ tel: ev.target.value });//获取联系电话
    }
    fnSub = () => {
        let userName = this.state.userName;
        let passWord = this.state.passWord;
        let location = this.state.location;
        let storeName = this.state.storeName;
        let storeAdress = this.state.storeAdress;
        let storeAlias = this.state.storeAlias;
        let tel = this.state.tel;
        let telreg = /^[1][3,4,5,7,8][0-9]{9}$/;      //手机正则
        let passreg = /^[A-Za-z]+[0-9]+[A-Za-z0-9]*|[0-9]+[A-Za-z]+[A-Za-z0-9]*$/g;  //密码正则   6-16个英文字母和数字的字符串
        let userreg = /^[a-zA-Z0-9_-]{4,16}$/;  //用户名校验    4到16位（字母，数字，下划线，减号）
        let namereg = /^[\u4E00-\u9FA5A-Za-z]+$/;   //名字校验   只含中文和英文
        if ( ! userreg.test(userName) ) {
            if (userName == "") {
                Toast.info('用户名不能为空', 1);
            } else {
                Toast.info('用户名不合法', 1);
            }
        } else if ( !passreg.test(passWord) ) {
            if (passWord == "") {
                Toast.info('密码不能为空', 1);
            } else {
                Toast.info('密码不合法', 1);
            }
        } else if ( location == "" ) {
            Toast.info('请选择地区', 1);
        } else if ( !namereg.test(storeName) ) {
            if (storeName == "") {
                Toast.info('门店名称不能为空', 1);
            } else {
                Toast.info('门店名称不合法', 1);
            }
        } else if ( storeAdress == "" ) {
            Toast.info('门店地址不能为空', 1);
        } else if ( !namereg.test(storeAlias) ) {
            if (storeAlias == "") {
                Toast.info('门店别称不能为空', 1);
            } else {
                Toast.info('门店别称不合法', 1);
            }
        } else if ( !telreg.test(tel) ) {
            if (tel == "") {
                Toast.info('联系电话不能为空', 1);
            } else {
                Toast.info('电话不合法', 1);
            }
        } else {
            Toast.info('注册成功', 1);
            console.log(userName, passWord, location, storeName, storeAdress, storeAlias, tel );
        }
    }
    render() {
        const store = {
            title: "请选择地区",
            list: [ "西湖区", "上城区", "下城区" ]
        };
        return (
            <div className={pageStyle['page']}>
                <React.Fragment>
                    <div className={"box"} id="openaccount">
                        <ul className="list">
                            <li className="a">账户名：
                                <input type="text" onChange={this.fnUserName} />
                            </li>
                            <li className="a">密码：
                                <input type="text" onChange={this.fnPassWord}/>
                            </li>
                            <li className="a">所在地区：
                                <div className="wrap">
                                    <DropList data={store} handleStore={this.handleStore} />
                                </div>
                            </li>
                            <li className="a">门店名称：
                                <input type="text" onChange={this.fnStoreName}/>
                            </li>
                            <li className="a">门店地址：
                                <input type="text" onChange={this.fnStoreAdress}/>
                            </li>
                            <li className="a">门店别称：
                                <input type="text" onChange={this.fnStoreAlias}/>
                            </li>
                            <li className="a">联系电话：
                                <input type="text" onChange={this.fnTel}/>
                            </li>
                            <a href="javascript:;" className="reset">取消</a>
                            <a href="javascript:;" className="sub" onClick={this.fnSub} >提交</a>
                        </ul>
                    </div>
                </React.Fragment>
            </div>
        )
    }
}

export default OpenAccount
