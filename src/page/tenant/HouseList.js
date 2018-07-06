import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './houseList.scss';
import pageStyle from '../page.scss';
import Tag from '../../component/common/Tag';
import ReactDOM from 'react-dom';
import { PullToRefresh } from 'antd-mobile';
import HouseInfo from '../../component/common/HouseInfo';
import TowItemView from '../../component/common/TowItemView';
import OneItemView from '../../component/common/OneItemView';
import OneTagView from '../../component/common/OneTagView';
import SearchBox from '../../component/common/SearchBox';
class HouseList extends Component {
    state = {
        freeList: [],
        refreshing: false,
        page: 0,
        pageRefresh: true,
        onIndex: -1,
        region: "不限",
        price: "不限租金",
        sort: "默认排序",
        tags: ""
    };
    
    hiddenview = [];
    async componentDidMount() {
        document.title = window.SITE_NAME + ' - ' + '房源信息';
        this.viewsHidden();

    }

    onRefresh = async () => {
        this.setState({ refreshing: true });
        this.setState({ refreshing: false });
    };

    changeEvent (e) {
        this.viewsHidden();
        if (this.state.onIndex !== e) {
            this.hiddenview[e].style = "visibility: visible";
            this.state.onIndex = e;
            this.cover.style = "visibility: visible";
        } else {
            this.state.onIndex = -1;
        }
    }

    viewsHidden() {
        for (let i = 0; i < 4; i++) {
            this.hiddenview[i].style = "visibility: hidden";
        }
        this.cover.style = "visibility: hidden";
    }

    hiddenAllView() {
        this.viewsHidden();
        this.state.onIndex = -1;
    }

    getListv(value, i) {
        return <div key={i}><div className={style['key_v']}><span>上城区</span></div><div className={style['item_line']}/></div>
    }

    changeRegionValue = (e, flag) => {
        this.setState({
            region: e
        });
        if (!flag) this.hiddenAllView();
    }

    changePriceValue = (e, flag) => {
        this.setState({
            price: e
        });
        if (!flag) this.hiddenAllView();
    }

    changeSortValue = (e, flag) => {
        this.setState({
            sort: e
        });
        if (!flag) this.hiddenAllView();
    }

    changeTagValue = (e, flag) => {
        this.setState({
            tags: e
        });
        if (!flag) this.hiddenAllView();
    }

    render() {
        const res = [
            {
                title: "整租·南北盛德国际·1室1厅",
                size: "32㎡ 朝北",
                position: "余杭·南庄兜",
                price: "2100元/月",
                tag: ["认证房源", "认证房源", "认证房源"],
                img: "/static/tenant/test.png"
            },
            {
                title: "整租·南北盛德国际·1室1厅",
                size: "32㎡ 朝北",
                position: "余杭·南庄兜",
                price: "2100元/月",
                tag: ["认证房源", "认证房源", "认证房源"],
                img: "/static/tenant/test.png"
            }
        ];
        const positions = [
            {
                name: "不限", 
                value: [
                    "不限"
                ]
            },
            {
                name: "下城",
                value: [
                    "全下城", "北景园", "宝善", "宝善", "宝善", "宝善", "宝善", "宝善"
                ]
            },
            {
                name: "上城",
                value: [
                    "全上城", "城站", "大学路", "复兴", "复兴", "复兴", "复兴", "复兴", "复兴"
                ]
            }
            
        ];
        const tagData = [
            {
                name: "房屋类型", 
                value: [
                    "一居", "二居", "三居", "四居", "四居以上"
                ]
            },
            {
                name: "房屋特色",
                value: [
                    "地铁附近", "拎包入住", "暖气供应"
                ]
            } 
        ];
        const prices = ["不限租金", "1000元以下", "1000-2000", "2000-3000", "3000-5000", "5000元以上"];
        const sizes = ["默认排序", "最新", "租金低", "面积从小到大", "面积从大到小"];
        const titlist = res.map((val, index) => {
            return (
                <li key={index}>
                    <HouseInfo datas = { val }/>
                    <div className={pageStyle['line']}></div>
                </li>
            )
        })
      
        return (
            <div className={pageStyle['page']}>
                <React.Fragment>
                    <div>
                        <div className={style['header']}>
                            <SearchBox />
                        </div>
                    </div>
                    <div>
                        <div className={style['conditionList']}>
                            <div className={style['condition']} onTouchStart={(e) => this.changeEvent(0)}><div><span>{ this.state.region }</span></div><div className={style['triangle']}></div></div>
                            <div className={style['division']}><div className={style['certical_line']}></div></div>
                            <div className={style['condition']} onTouchStart={(e) => this.changeEvent(1)}><div><span>{ this.state.price }</span></div><div className={style['triangle']}></div></div>
                            <div className={style['division']}><div className={style['certical_line']}></div></div>
                            <div className={style['condition']} onTouchStart={(e) => this.changeEvent(2)}><div><span>{ this.state.sort }</span></div><div className={style['triangle']}></div></div>
                            <div className={style['division']}><div className={style['certical_line']}></div></div>
                            <div className={style['condition']} onTouchStart={(e) => this.changeEvent(3)}><div><span>更多</span></div><div className={style['triangle']}></div></div>
                        </div>
                    </div>
                    <div className={pageStyle['line']}></div>
                    <div className={style['cover_box']} ref={(ref) => this.cover = ref} onTouchStart={(e) => this.hiddenAllView(e)}/>
                    <div className={style['dropdown_box']} ref={(ref) => this.hiddenview[0] = ref}>
                        <div className={style['item_box']}>
                            <TowItemView res={ positions } returnEvent={ this.changeRegionValue }/>
                        </div>
                    </div>
                    <div className={style['dropdown_box']} ref={(ref) => this.hiddenview[1] = ref}>
                        <div className={style['bg-eee']}>
                            <OneItemView res={ prices }  returnEvent={ this.changePriceValue }/>
                        </div>
                    </div>  
                    <div className={style['dropdown_box']} ref={(ref) => this.hiddenview[2] = ref}>
                        <div className={style['bg-eee']}>
                            <OneItemView res={ sizes }  returnEvent={ this.changeSortValue }/>
                        </div>
                    </div>  
                    <div className={style['dropdown_box']} ref={(ref) => this.hiddenview[3] = ref}>
                        <OneTagView res={ tagData } returnEvent={ this.changeTagValue }/>
                    </div>  
                    <div>
                        <div className={style['infoList']}>
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
export default HouseList;