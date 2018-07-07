import React, { Component } from 'react';
import pageStyle from '../page2.scss';
import Header from './component/Header';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import './ServiceInfo.css';
class ServiceInfo extends Component {
    constructor( ...args ) {
        super( ...args);
    }
    static propTypes={
        history: PropTypes.object
    }
    componentDidMount() {
        document.title = '合同信息';
    }
    fnJump = (e) => {
        if (parseInt(e.target.alt)) {
            return;
        } else {
            this.props.history.push("/servicepayment");
        }
    }
    render() {
        const imgSrc = ["/static/union_store/yizhifu.png", "/static/union_store/quzhifu.png"]
        let aText = {
            "address": "江干区文海南路",
            "username": "王晓晓",
            "tel": "15263487856",
            "date": "2018-5-24 15：20",
            "content": "【厨房维修】漏水了赶紧来修一下",
            "price": "260元",
            "status": "已接单",
            "statusNum": 0                  //1代表已支付  0代表未支付
        };
        return (
            <div className={pageStyle['page']} id="serviceinfo">
                <React.Fragment>
                    <div className={'box'}>
                        <div className={'list'}>
                            <ul>
                                <li className={'item1'}>报修地址：{aText.address}</li>
                                <li className={'item2'}>租客：{aText.username}</li>
                                <li className={'item3'}>电话：{aText.tel}</li>
                                <li className={'item4'}>报修时间：{aText.date}</li>
                                <li className={'item5'}>报修内容：{aText.content}</li>
                                <li className={'item6'}>报修金额：{aText.price}</li>
                                <li className={'item7'}>状态：{aText.status}</li>
                            </ul>
                            <div className={'img'}>
                                <img src={aText.statusNum ? imgSrc[0] : imgSrc[1]} alt={aText.statusNum} onClick={ this.fnJump } />
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            </div>
        )
    }
}
export default ServiceInfo;
