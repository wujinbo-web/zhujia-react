import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './unionHome.scss';
import pageStyle from '../page.scss';

class UnionHome extends Component {

    async componentDidMount() {
        document.title = window.SITE_NAME + ' - ' + '个人房东';
    }

    jumpToPage(e) {

    }

    render() {
        return (
            <div className={pageStyle['page']}>
                <React.Fragment>
                    <div className={style['banner']}>
                        <img src="/static/union_store/banner.png" />
                    </div>
                    <div className={style['content']}>
                        <div className={style['func_box']}>
                            <div className={style['func_ol']}>
                                <div className={style['func_li']} onTouchEnd={(e) => this.jumpToPage("")}>
                                    <img src="/static/union_store/fangyuanguanli.png" /><span>房源管理</span>
                                </div>
                                <div className={style['vertical_line']} />
                                <div className={style['func_li']} onTouchEnd={(e) => this.jumpToPage("")}>
                                    <img src="/static/union_store/hetongguanli.png" /><span>合同管理</span>
                                </div>
                                <div className={style['vertical_line']} />
                                <div className={style['func_li']} onTouchEnd={(e) => this.jumpToPage("")}>
                                    <img src="/static/union_store/zhinengsuo.png" /><span>智能锁</span>
                                </div>
                            </div>
                            <div className={style['line']} />
                            <div className={style['func_ol']}>
                                <div className={style['func_li']} onTouchEnd={(e) => this.jumpToPage("")}>
                                    <img src="/static/union_store/caiwu.png" /><span>财务</span>
                                </div>
                                <div className={style['vertical_line']} />
                                <div className={style['func_li']} onTouchEnd={(e) => this.jumpToPage("")}>
                                    <img src="/static/union_store/renyuan.png" /><span>人员</span>
                                </div>
                                <div className={style['vertical_line']} />
                                <div className={style['func_li']} onTouchEnd={(e) => this.jumpToPage("")}>
                                    <img src="/static/union_store/weixiu.png" /><span>维修</span>
                                </div>
                            </div>
                            <div className={style['line']} />
                            <div className={style['func_ol']}>
                                <div className={style['func_li']} onTouchEnd={(e) => this.jumpToPage("")}>
                                    <img src="/static/union_store/kaquanbao.png" /><span>卡券包</span>
                                </div>
                                <div className={style['vertical_line']} />
                                <div className={style['func_li']} onTouchEnd={(e) => this.jumpToPage("")}>
                                    <img src="/static/union_store/zufangbaoxian.png" /><span>租房保险</span>
                                </div>
                                <div className={style['vertical_line']} />
                                <div className={style['func_li']} onTouchEnd={(e) => this.jumpToPage("")}>
                                    <img src="/static/union_store/xiazaiapp.png" /><span>下载APP</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            </div>
        );
    }
}
export default UnionHome;