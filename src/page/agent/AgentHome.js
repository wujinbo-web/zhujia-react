import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './agentHome.scss';
import pageStyle from '../page.scss';

class AgentlHome extends Component {
    static propTypes = {
        history: PropTypes.object
    }

    async componentDidMount() {
        document.title = window.SITE_NAME + ' - ' + '个人房东';
    }

    jumpToPage(e) {
        this.props.history.push(e);
    }

    render() {
        return (
            <div className={pageStyle['page']}>
                <React.Fragment>
                    <div className={style['banner']}>
                        <img src="/static/agent/banner.png" />
                    </div>  
                    <div className={style['content']}>
                        <div className={style['func_box']}>
                            <div className={style['func_ol']}>
                                <div className={style['func_li']} onTouchEnd={(e) => this.jumpToPage("/agentRelease")}>
                                    <img src="/static/agent/fangyuanguanli.png" /><span>房源管理</span>
                                </div>
                                <div className={style['vertical_line']} />
                                <div className={style['func_li']} onTouchEnd={(e) => this.jumpToPage("/agentContract")}>
                                    <img src="/static/agent/hetongguanli.png" /><span>合同管理</span>
                                </div>
                                <div className={style['vertical_line']} />
                                <div className={style['func_li']} onTouchEnd={(e) => this.jumpToPage("/agentRepairOrder")}>
                                    <img src="/static/agent/wodedingdan.png" /><span>我的订单</span>
                                </div>
                            </div>
                            <div className={style['line']} />
                            <div className={style['func_ol']}>
                                <div className={style['func_li']}>
                                    <img src="/static/agent/zufangbaoxian.png" /><span>租房保险</span>
                                </div>
                                <div className={style['vertical_line']} />
                                <div className={style['func_li']} onTouchEnd={(e) => this.jumpToPage("/agentRepair")}>
                                    <img src="/static/agent/weixiu.png" /><span>维修</span>
                                </div>
                                <div className={style['vertical_line']} />
                                <div className={style['func_li']} onTouchEnd={(e) => this.jumpToPage("")}>
                                    <img src="/static/agent/xiazaiapp.png" /><span>下载APP</span>
                                </div>
                            </div>
                            <div className={style['line']} />
                            <div className={style['func_ol']}>
                                <div className={style['func_li']}>
                                    <img src="/static/agent/kaquanbao.png" /><span>卡券包</span>
                                </div>
                                <div className={style['vertical_line']} />
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            </div>
        );
    }
}
export default AgentlHome;