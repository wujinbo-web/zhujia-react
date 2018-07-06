import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './unionContractInfo.scss';
import pageStyle from '../page.scss';
import ContractState from '../../component/common/ContractState';

class UnionContractInfo extends Component {

    async componentDidMount() {
        document.title = window.SITE_NAME + ' - ' + '合同信息';
    }

    onsubmit = () => {

    }

    render() {
        const res = {
            position: "江干区文海南路",
            price: "1500",
            todate: "2018-5-23至2019-5-23",
            type: "月付",
            state: "正常"
        }
        return (
            <div className={pageStyle['background_color']}>
                <React.Fragment>
                    <div className={style['content']}>
                        <div className={style['info']}>
                            <div className={style['sign_box']}><ContractState state={res.state} /></div>
                            <div><img src="/static/union_store/wuyedizhi.png" /><span>物业地址:</span><span>{res.position}</span></div>
                            <div><img src="/static/union_store/zujin.png" /><span>租金:</span><span>{res.price}元</span></div>
                            <div><img src="/static/union_store/zuqi.png" /><span>租期:</span><span>{res.todate}</span></div>
                            <div><img src="/static/union_store/fukuan.png" /><span>付款:</span><span>{res.type}</span></div>
                            <div><img src="/static/union_store/yajin.png" /><span>押金:</span><span>{res.price}</span></div>
                            <div><img src="/static/union_store/hetongzhuangtai.png" /><span>合同状态:</span><div className={style['stop_contract']}><span>终止合同</span></div></div>
                        </div>
                        
                        <div className={style['buttons']}>
                            <div>
                                <div className={style['button_box']}>
                                    <div className={style['button']}><span>详情</span></div>
                                </div>
                                <div className={style['button_box']}>
                                    <div className={style['button']}><span>支付情况</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            </div>
        );
    }
}
export default UnionContractInfo;