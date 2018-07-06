import React, { Component } from 'react';
import Header from './component/Header';
import pageStyle from '../page2.scss';
import './IntelligentBuy.css';
class IntelligentBuy extends Component {
    constructor (...args) {
        super (...args);
        this.state = {
            count: 1,
            adress: '',
            user: '',
            tel: ''
        };
    }
    componentDidMount() {
        document.title = window.SITE_NAME + ' - ' + '智能锁';
    }
    fnAdress = (ev) => {
        this.setState({ adress: ev.target.value });
    }
    fnUser = (ev) => {
        this.setState({ user: ev.target.value });
    }
    fnTel = (ev) => {
        this.setState({ tel: ev.target.value });
    }
    fnSub = () => {
        console.log(`输入的地址为：${this.state.adress}，用户名为：${this.state.user}，电话为：${this.state.tel},购买的数量为：${this.state.count}`);
    }
    fnJia = () => {
        let num = this.state.count + 1;
        this.setState({ count: num });
    }
    fnJian = () => {
        let num = this.state.count - 1;
        if (num < 1) {
            num = 1;
        }
        this.setState({ count: num });
    }
    render() {
        return (
            <div className={pageStyle['page']}>
                <React.Fragment>
                    <div className={"box"} id="intelligentbuy">
                        <Header title="购买智能锁" />
                        <ul>
                            <li>地址:
                                <input type="text" onChange= { this.fnAdress }  />
                            </li>
                            <li>联系人:
                                <input type="text" onChange= { this.fnUser } />
                            </li>
                            <li>电话:
                                <input type="text" onChange= { this.fnTel } />
                            </li>
                            <li>购买数量:
                                <p className="count">
                                    <a href="javascript:;" className="jian" onClick={this.fnJian}></a>
                                    <span>{this.state.count}</span>
                                    <a href="javascript:;" className="jia" onClick={this.fnJia} ></a>
                                </p>
                            </li>
                            <a href="javascript:;" className="sub" onClick={this.fnSub} >提交</a>
                        </ul>
                    </div>
                </React.Fragment>
            </div>
        )
    }
}

export default IntelligentBuy
