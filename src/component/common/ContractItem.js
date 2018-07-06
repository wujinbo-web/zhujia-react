import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './contractItem.scss';
import Button from '../../component/common/Button';
class ContractItem extends Component {
    static propTypes={
        datas: PropTypes.object,
        title: PropTypes.string,
        img: PropTypes.string,
        size: PropTypes.string,
        price: PropTypes.string,
        number: PropTypes.string
    }

    onCheckButton = (e) => {
        console.log("button down");
    }

    render() {
        return (
            <div className={style['item']}  >
                <div className={style['item_header']}><span>合同号：{this.props.datas.number}</span></div>
                <div className={style['item_info']}>
                    <div className={style['item_img']}><img src={this.props.datas.img}/></div>
                    <div className={style['item_right']}>
                        <div className={style['title']}><span>{this.props.datas.title}</span></div>
                        <div className={style['size']}><span>{this.props.datas.size}</span></div>
                        <div className={style['price']}><span>{this.props.datas.price}</span></div>
                    </div>
                </div>
                <div className={style['item_bottom']}>
                    <div className={style['func_box']}>
                        <Button text="详情" buttonDownEvent={this.onCheckButton}/>
                        <Button text="付佣" buttonDownEvent={this.onCheckButton}/>
                        <Button text="逾期催款" buttonDownEvent={this.onCheckButton} color="#f86767"/>
                    </div>
                </div>
            </div>
        )
    }
}
export default ContractItem;