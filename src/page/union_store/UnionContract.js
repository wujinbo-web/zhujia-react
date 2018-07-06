import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './unionContract.scss';
import pageStyle from '../page.scss';
import UnionContractItem from '../../component/common/UnionContractItem';

class UnionContract extends Component {

    async componentDidMount() {
        document.title = window.SITE_NAME + ' - ' + '合同管理';
    }

    getItem = (data, i) => {
        return <UnionContractItem data={data} key={i}/>;
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
                    <div className={style['background_color']}>
                        <div className={style['search_box']}>
                            <div className={style['search_bar']}>
                                <img src="/static/union_store/fangyuansousuo2.png" /><input type="text"  placeholder="请输入要查询的小区/房源"/>
                            </div>
                        </div>
                        <div className={style['selected_bar']}>
                            <div><span>合同状态:</span></div>
                            <div><img src="/static/union_store/select_on.png"/><span>全部</span></div>
                            <div><img src="/static/union_store/select_on.png"/><span>逾期</span></div>
                            <div><img src="/static/union_store/select_off.png"/><span>分期</span></div>
                            <div><img src="/static/union_store/select_off.png"/><span>欠费</span></div>
                            <div><img src="/static/union_store/select_off.png"/><span>1个月到期</span></div>
                        </div>
                        <div className={style['item_box']}>
                            <div className={style['items']}>
                                {res.map(this.getItem)}
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            </div>
        );
    }
}
export default UnionContract;