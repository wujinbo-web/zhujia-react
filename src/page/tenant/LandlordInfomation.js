import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './landlordInfomation.scss';
import pageStyle from '../page.scss';
import { PullToRefresh } from 'antd-mobile';
import HouseInfo from '../../component/common/HouseInfo';

class LandlordInfomation extends Component {
    static propTypes = {
        pageTitle: PropTypes.string
    };

    state = {
        freeList: [],
        refreshing: false,
        page: 0,
        pageRefresh: true,
        onIndex: -1
    };

    async componentDidMount() {
        document.title = "王羲之";
    }

    render() {
        console.log("LandlordInfomation");
        const res = [
            {
                title: "整租·南北盛德国际·1室1厅",
                size: "32㎡ 朝北",
                position: "余杭·南庄兜",
                price: "2100元/月",
                tag: "认证房源",
                img: "/static/tenant/test.png"
            },
            {
                title: "整租·南北盛德国际·1室1厅",
                size: "32㎡ 朝北",
                position: "余杭·南庄兜",
                price: "2100元/月",
                tag: "认证房源",
                img: "/static/tenant/test.png"
            }
        ];
        const titlist = res.map((val, index) => {
            return (
                <li key={index} className={style['list_box']}>
                    <HouseInfo datas = { val }/>
                    <div className={pageStyle['line']}></div>
                </li>
            )
        })
        return (
            <div className={pageStyle['page']}>
                <React.Fragment>
                    <div className={style['landlord_info']}>
                        <div className={style['user_head']}>
                            <img src="/static/tenant/default.png" />
                            <span>王羲之</span>
                        </div>
                        <div className={style['message']}><img src="/static/tenant/message.png" /></div>
                        <div className={style['phone']}><img src="/static/tenant/phone.png" /></div>
                    </div>
                    <div className={style['other_source']}>
                        <div className={style['line_division']}>
                            <div className={style['line_title']}>
                                <div className={style['short_line']}/><div><span>其他房源</span></div><div className={style['short_line']}/>
                            </div>
                            <div className={style['line']}/>
                        </div>
                        <div>
                            <PullToRefresh
                                damping={60}
                                ref={el => this.ptr = el}
                                className={style['overflowScrolling']}
                                style={{
                                    overflow: 'auto'
                                }}
                                indicator={{ deactivate: '上拉刷新' }}
                                direction="up"
                                refreshing={this.state.refreshing}
                                onRefresh={this.onRefresh}
                            >{titlist.length == 0 ? <div className={style["empty-wrap"]}>暂无数据</div> : titlist}
                            </PullToRefresh>
                        </div>
                    </div>
                </React.Fragment>
            </div>
        );
    }
}
export default LandlordInfomation;