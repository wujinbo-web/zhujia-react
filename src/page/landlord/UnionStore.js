import React, { Component } from 'react'
import pageStyle from '../page2.scss';

require('./UnionStore.css');

class UnionStore extends Component {
    constructor(...args) {
        super(...args);
    }
    componentDidMount() {
        document.title = '联盟店';
    }
    render() {
        let sBannnerImg = '/static/union_store/banner.png';
        let aListImg = [
            { src: '/static/union_store/fangyuanguanli.png', text: '房源管理' },
            { src: '/static/union_store/hetongguanli.png', text: '合同管理' },
            { src: '/static/union_store/zhinengsuo.png', text: '智能锁' },
            { src: '/static/union_store/caiwu.png', text: '财务管理' },
            { src: '/static/union_store/renyuan.png', text: '人员' },
            { src: '/static/union_store/weixiu.png', text: '维修' },
            { src: '/static/union_store/kaquanbao.png', text: '卡券包' },
            { src: '/static/union_store/zufangbaoxian.png', text: '租房保险' },
            { src: '/static/union_store/xiazaiapp.png', text: '下载APP' }
        ];
        return (
            <div className={pageStyle['page']} id="banner">
                <React.Fragment>
                    <div className="box">
                        <div className={'banner'} >
                            <img src={sBannnerImg} />
                        </div>
                        <div className={'list'}>
                            {
                                aListImg.map((list, index) => {
                                    return (
                                        <a href="#unionStore" key={index} className={'item'}>
                                            <img src={list.src} />
                                            <p>{list.text}</p>
                                        </a>
                                    )
                                })
                            }

                        </div>
                    </div>
                </React.Fragment>
            </div>
        );
    }
}
export default UnionStore
