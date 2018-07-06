import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './unionList.scss';
import pageStyle from '../page.scss';
import UnionItem from '../../component/common/UnionItem';

class UnionList extends Component {

    async componentDidMount() {
        document.title = window.SITE_NAME + ' - ' + '房源管理';
    }

    getItem = (data, i) => {
        return <UnionItem data={data} key={i} />
    }

    render() {
        const res = [
            {
                name: "伊萨卡国际城",
                type: "0",
                day: "15",
                position: "1幢1001",
                price: "1500",
                username: "张超"
            },
            {
                name: "伊萨卡国际城",
                type: "0",
                day: "15",
                position: "1幢1001",
                price: "1500",
                username: "张超"
            },
            {
                name: "伊萨卡国际城",
                type: "0",
                day: "15",
                position: "1幢1001",
                price: "1500",
                username: "张超"
            },
            {
                name: "伊萨卡国际城",
                type: "0",
                day: "15",
                position: "1幢1001",
                price: "1500",
                username: "张超"
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
                            <div><span>房源状态:</span></div>
                            <div><img src="/static/union_store/select_on.png"/><span>欠费</span></div>
                            <div><img src="/static/union_store/select_off.png"/><span>逾期</span></div>
                            <div><img src="/static/union_store/select_off.png"/><span>分期</span></div>
                            <div><img src="/static/union_store/select_off.png"/><span>空置</span></div>
                            <div><img src="/static/union_store/select_off.png"/><span>智能锁</span></div>
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
export default UnionList;