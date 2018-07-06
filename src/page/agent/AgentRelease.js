import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './agentRelease.scss';
import pageStyle from '../page.scss';
import { PullToRefresh } from 'antd-mobile';
import Tag from '../../component/common/Tag';
import ReleaseInfo from '../../component/common/ReleaseInfo';

class AgentRelease extends Component {
    state = {
        freeList: [],
        refreshing: false,
        page: 0,
        pageRefresh: true,
        onIndex: -1
    };

    async componentDidMount() {
        document.title = window.SITE_NAME + ' - ' + '我的发布';
    }

    onRefresh = async () => {
        this.setState({ refreshing: true });
        this.setState({ refreshing: false });
    };

    render() {
        const res = [
            {
                title: "假山新村",
                size: "2室1厅/32㎡/朝北",
                price: "2100元/月",
                tag: ["认证房源", "认证房源", "认证房源"],
                img: "/static/test/yulan.png"
            },
            {
                title: "假山旧村",
                size: "2室1厅/32㎡/朝北",
                price: "2100元/月",
                tag: ["认证房源", "认证房源", "认证房源"],
                img: "/static/test/yulan.png"
            }
        ];
        const titlist = res.map((val, index) => {
            return (
                <li key={index}>
                    <ReleaseInfo datas={res[0]}/>
                </li>
            )
        });
        return (
            <div className={pageStyle['page']}>
                <React.Fragment>
                    <div className={style['item_box']}>
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
                </React.Fragment>
            </div>
        );
    }
}
export default AgentRelease;