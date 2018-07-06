import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './individualPayment.scss';
import pageStyle from '../page.scss';

class IndividualPayment extends Component {

    async componentDidMount() {
        document.title = window.SITE_NAME + ' - ' + '在线支付';
        window.wx.config({
            debug: false,
            appId: '公众号ID', 
            timestamp: "timestamp", 
            nonceStr: "nonceStr",
            signature: "signature",
            jsApiList: [ 'checkJsApi', 'chooseWXPay']
        });
    }

    openPaymentEvent = () => {
        window.wx.chooseWXPay({
            timeStamp: '',
            nonceStr: '',
            package: '',
            signType: 'MD5',
            paySign: '',
            success: function (res) {
                console.log(res)
            },
            fail: function (res) {
                console.log("fail")
            }
        });
    }

    render() {
        const res = {
            number: "0123456789",
            type: [
                "【厨房维修】厨房水管漏水"
            ],
            price: "38.00"
        }
        return (
            <div className={pageStyle['page']}>
                <React.Fragment>
                    <div className={style['page_color']}>
                        <div className={style['item']}>
                            <div className={style['order_title']}><span>订单编号:</span><span>{res.number}</span></div>
                        </div>
                        <div className={style['item']}>
                            <div className={style['order_title']}><span>订单详情:</span></div>
                            <div className={style['order_type']}><span>{res.type[0]}</span></div>
                        </div>
                        <div className={style['item']}>
                            <div className={style['order_title']}><span>支付金额:</span></div>
                            <div className={style['order_price']}><span>¥{res.price}</span></div>
                        </div>
                        <div className={style['item']}>
                            <div className={style['order_title']}><span>支付方式:</span></div>
                            <div className={style['order_payment']}><img src="/static/tenant/weixinzhifu.png" className={style['payment_img']}/><span>微信支付</span><img src="/static/tenant/yixuanzhifu fangshi.png"  className={style['select_img']}/></div>
                            <div className={style['order_payment']}><img src="/static/tenant/yuezhiifu.png" className={style['payment_img']}/><span>余额支付</span><img src="/static/tenant/weixuanzhong.png"  className={style['select_img']}/></div>
                        </div>
                        <div className={style['button']} onTouchStart={this.openPaymentEvent}>
                            <span>确认支付</span>
                        </div>
                    </div>
                </React.Fragment>
            </div>
        );
    }
}
export default IndividualPayment;