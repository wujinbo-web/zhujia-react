import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './agentDetails.scss';
import pageStyle from '../page.scss';

class AgentDetails extends Component {

    async componentDidMount() {
        document.title = window.SITE_NAME + ' - ' + '签约详情';
    }

    render() {
        return (
            <div className={pageStyle['page']}>
                <React.Fragment>
                    <div className={style['content']}>
                        <div className={style['crude_line']}/>
                        <div>
                            <div className={style['item_title']}>
                                <img src="/static/tenant/title_img.png"/><span>合同信息</span>
                            </div>
                            <div className={style['line']} />
                            <div className={style['item']}>
                                <span>合同编号</span>
                                <span className={style['right']}>CTR201710162406</span>
                            </div>
                            <div className={style['line']} />
                            <div className={style['item']}>
                                <span>完成时间</span>
                                <span className={style['right']}>2017-10-16 14:32:29</span>
                            </div>
                            <div className={style['line']} />
                            <div className={style['item']}>
                                <span>合同状态</span>
                                <span className={style['right']}>正常</span>
                            </div>
                        </div>
                        <div className={style['crude_line']}/>
                        <div>
                            <div className={style['item_title']}>
                                <img src="/static/tenant/title_img.png"/><span>合同信息</span>
                            </div>
                            <div className={style['line']} />
                            <div className={style['item']}>
                                <span>出租人姓名:刘凯威</span>
                                <span className={style['right']}>15565658585</span>
                            </div>
                            <div className={style['line']} />
                            <div className={style['item_img_text']}>
                                <span>承租人姓名:朱弘诚</span>
                                <div className={style['right']}>
                                    <img src="/static/tenant/phone_2.png" /><span>17878786565</span>
                                </div>
                            </div>
                        </div>
                        <div className={style['crude_line']}/>
                    </div>
                    <div className={style['bottom']}>
                        <span>查看合同</span>
                    </div>
                </React.Fragment>
            </div>
        );
    }
}
export default AgentDetails;