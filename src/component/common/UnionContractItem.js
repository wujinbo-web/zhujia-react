import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './unionContractItem.scss';
import ContractState from './ContractState';

class UnionContractItem extends Component {

    static propTypes={
        data: PropTypes.object,
        type: PropTypes.string,
        position: PropTypes.string,
        price: PropTypes.string,
        todate: PropTypes.string
    }
    
    render() {    
        return (
            <div className={style['item']}>
                <div className={style['sign_box']}><ContractState state={this.props.data.type} /></div>
                <div className={style['item_info']}>
                    <img src="/static/union_store/wuyedizhi.png" /><span>物业地址:</span><span>{this.props.data.position}</span>
                </div>
                <div className={style['item_info']}>
                    <img src="/static/union_store/zujin.png" /><span>租金:</span><span>{this.props.data.price}元</span>
                </div>
                <div className={style['item_info']}>
                    <img src="/static/union_store/zuqi.png" /><span>租期:</span><span>{this.props.data.todate}</span>
                </div>
            </div>
        );  
    }
}
export default   UnionContractItem;