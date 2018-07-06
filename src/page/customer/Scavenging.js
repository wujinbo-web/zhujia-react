import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './scavenging.scss';
import pageStyle from '../page.scss';

class Scavenging extends Component {

    async componentDidMount() {
        document.title = window.SITE_NAME + ' - ' + '扫一扫';
        window.wx.config({
            debug: false,
            appId: '公众号ID', 
            timestamp: "timestamp", 
            nonceStr: "nonceStr",
            signature: "signature",
            jsApiList: [ 'checkJsApi', 'scanQRCode']
        });
    }

    openEvent = () => {     
        window.wx.scanQRCode({
            needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
            scanType: ["qrCode"], // 可以指定扫二维码还是一维码，默认二者都有
            success: function (res) {
                console.log(res); // 当needResult 为 1 时，扫码返回的结果
            },
            fail: function () {
                console.log("fail");
            }
        });  
    }

    render() {
        console.log("scavenging");
        return (
            <div className={pageStyle['page']}>
                <React.Fragment>
                    <div onTouchStart={this.openEvent}>
                        点击扫一扫
                    </div>
                </React.Fragment>
            </div>
        );
    }
}
export default Scavenging;