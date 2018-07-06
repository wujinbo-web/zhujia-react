import React, { Component } from 'react';
import pageStyle from '../page2.scss';
import Header from './component/Header';

require("./ServicePayment.css")
class ServicePayment extends Component {
    constructor( ...args ) {
        super( ...args );
        this.state = {
            radioValue: '',                       //单选按钮的值
            radioChecked: ['', '']               //判断选中的样式
        };
    }
    handleChange = (e) => {            //单选按钮函数
        let arr = ( e.target.value == 'wx' ? ['active', ''] : ['', 'active'] );
        this.setState({
            radioValue: e.target.value,
            radioChecked: arr
        });
    }
    componentDidMount() {
        document.title = '在线支付';
    }
    render() {
        const { radioValue, radioChecked } = this.state;
        let text = {
            orderNumber: '0123456789',
            orderDetails: '【厨房维修】厨房水管漏水',
            money: '36.00'
        };
        return (
            <div className={pageStyle['page']} id="servicepayment">
                <React.Fragment>
                    <div className={'box'}>
                        <Header title="在线支付"/>
                        <div className={'paylist1'}>
                            <h2>订单编号：{text.orderNumber}</h2>
                            <hr/>
                            <h2>订单详情：</h2>
                            <p className={"text"}>{text.orderDetails}</p>
                        </div>
                        <div className={'paylist2'}>
                            <h2>支付金额：</h2>
                            <div className={"price"}>￥{text.money}</div>
                        </div>
                        <div className={'paylist3'}>
                            <h2>支付方式：</h2>
                            <p className={"pay1"}>微信支付
                                <label htmlFor="pay1" className={radioChecked[0]}></label>
                                <input
                                    type="radio"
                                    name="payment"
                                    id="pay1"
                                    value="wx"
                                    checked={radioValue === 'wx'}
                                    onChange={this.handleChange}
                                />
                            </p>
                            <p className={"pay2"}>余额支付
                                <label htmlFor="pay2" className={radioChecked[1]}></label>
                                <input
                                    type="radio"
                                    name="payment"
                                    id="pay2"
                                    value="ye"
                                    checked={radioValue === 'ye'}
                                    onChange={this.handleChange}
                                />
                            </p>
                        </div>
                        <a href="javascript:;" className={"pay_btn"}>确定支付</a>
                    </div>
                </React.Fragment>
            </div>
        )
    }
}
export default ServicePayment
