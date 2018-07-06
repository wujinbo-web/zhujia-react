import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './unionContractPayment.scss';
import pageStyle from '../page.scss';
import ContractState from '../../component/common/ContractState';

class UnionContractPayment extends Component {

    async componentDidMount() {
        document.title = window.SITE_NAME + ' - ' + '合同信息';
    }

    onsubmit = () => {

    }

    getItem = (data, i) => {
        return (
            <div className={style['item']} key={i}>
                <div className={style['info']}>
                    <div className={style['sign_box']}><ContractState state={data.state} /></div>
                    {data.paymentState === "未支付" ? <div className={style['remind_box']}>{data.dateState === "逾期" ? <span>催租提醒</span> : <span>房租提醒</span>}</div> : ""}
                    <div><img src="/static/union_store/zuke.png" /><span>合同编号:</span><span>{data.number}</span></div>
                    <div><img src="/static/union_store/zujin.png" /><span>交租日期:</span><span>{data.rentDate}</span></div>
                    <div><img src="/static/union_store/zuqi.png" /><span>房租金额:</span><span>{data.rent}元</span></div>
                    <div><img src="/static/union_store/fukuan.png" /><span>是否支付:</span><span>{data.paymentState}</span></div>
                    <div><img src="/static/union_store/dianhua.png" /><span>是否逾期:</span><span>{data.dateState}</span></div>
                </div>
            </div>
        );
    }

    render() {
        const res = [
            {
                number: "M12345678",
                rent: "1500",
                rentDate: "2018-6-23",
                paymentState: "未支付",
                dateState: "逾期",
                state: "逾期"
            },
            {
                number: "M12345678",
                rent: "1500",
                rentDate: "2018-6-23",
                paymentState: "未支付",
                dateState: "逾期",
                state: "逾期"
            },
            {
                number: "M12345678",
                rent: "1500",
                rentDate: "2018-6-23",
                paymentState: "未支付",
                dateState: "逾期",
                state: "逾期"
            },
            {
                number: "M12345678",
                rent: "1500",
                rentDate: "2018-6-23",
                paymentState: "未支付",
                dateState: "逾期",
                state: "逾期"
            },
            {
                number: "M12345678",
                rent: "1500",
                rentDate: "2018-6-23",
                paymentState: "已支付",
                dateState: "未逾期",
                state: "正常"
            },
            {
                number: "M12345678",
                rent: "1500",
                rentDate: "2018-6-23",
                paymentState: "未支付",
                dateState: "未逾期",
                state: "正常"
            }
        ]
        return (
            <div className={pageStyle['background_color']}>
                <React.Fragment>
                    <div className={style['item_box']}>
                        {res.map(this.getItem)}
                    </div>
                </React.Fragment>
            </div>
        );
    }
}
export default UnionContractPayment;