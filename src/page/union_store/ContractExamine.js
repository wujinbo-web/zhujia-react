import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './contractExamine.scss';
import pageStyle from '../page.scss';

class ContractExamine extends Component {

    async componentDidMount() {
        document.title = window.SITE_NAME + ' - ' + '合同审核';
    }

    getItem = (data, i) => {
        return (
            <div className={style['item']} key={i}>
                <div className={style['sign_box']}><span>查看合同</span></div>
                <div className={style['item_info']}>
                    <img src="/static/union_store/wuyedizhi.png" /><span>物业地址:</span><span>{data.position}</span>
                </div>
                <div className={style['item_in  fo']}>
                    <img src="/static/union_store/zujin.png" /><span>租金:</span><span>{data.price}元</span>
                </div>
                <div className={style['item_info']}>
                    <img src="/static/union_store/zuqi.png" /><span>租期:</span><span>{data.todate}</span>
                </div>
            </div>
        );
    }

    render() {
        const res = [
            {
                type: "正常",
                position: "江干区文海南路",
                price: "1500",
                todate: "2018-5-23至2019-5-23"
            },
            {
                type: "逾期",
                position: "江干区文海南路",
                price: "1500",
                todate: "2018-5-23至2019-5-23"
            },
            {
                type: "分期",
                position: "江干区文海南路",
                price: "1500",
                todate: "2018-5-23至2019-5-23"
            },
            {
                type: "欠费",
                position: "江干区文海南路",
                price: "1500",
                todate: "2018-5-23至2019-5-23"
            },
            {
                type: "一个月到期",
                position: "江干区文海南路",
                price: "1500",
                todate: "2018-5-23至2019-5-23"
            },
            {
                type: "一个月到期",
                position: "江干区文海南路",
                price: "1500",
                todate: "2018-5-23至2019-5-23"
            }
        ];
        return (
            <div className={pageStyle['page']}>
                <React.Fragment>
                    <div className={style['item_box']}>
                        <div className={style['items']}>
                            {res.map(this.getItem)}
                        </div>
                    </div>
                </React.Fragment>
            </div>
        );
    }
}
export default ContractExamine;