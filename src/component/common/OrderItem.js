import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './orderItem.scss';
import Button from '../../component/common/Button';
class OrderItem extends Component {
    static propTypes={
        datas: PropTypes.object,
        name: PropTypes.string,
        position: PropTypes.string,
        type: PropTypes.string,
        buttons: PropTypes.array,
        number: PropTypes.string
    }

    onCheckButton = (e) => {
        console.log("button down");
    }
    getButton = (data, i) => {
        return <div className={style['button']} key={i}>{data}</div>;
    }

    render() {
        return (
            <div className={style['item']}>
                <div className={style['content']}>
                    <div>维修单号: {this.props.datas.number}</div>
                    <div>维修类型: {this.props.datas.type}</div>
                    <div>地址: {this.props.datas.position}</div>
                    <div>申请人: {this.props.datas.name}</div>
                </div>
                <div className={style['body']}>
                    <div className={style['button_box']}>
                        {this.props.buttons.map(this.getButton)}
                    </div>
                </div>
            </div>
        )
    }
}
export default OrderItem;