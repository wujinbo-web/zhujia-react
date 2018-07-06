import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './unionItem.scss';

class UnionItem extends Component {

    static propTypes={
        data: PropTypes.object,
        name: PropTypes.string,
        type: PropTypes.string,
        day: PropTypes.string,
        price: PropTypes.string,
        position: PropTypes.string,
        username: PropTypes.string
    }
    
    render() {    
        return (
            <div className={style['item']}>
                <div className={style['corner']}>{this.props.data.day}天</div>
                <div className={style['house_info']}>
                    <div><span>{this.props.data.position}</span></div>
                    <div><span>¥{this.props.data.price}</span></div>
                    <div><span>{this.props.data.username}</span></div>
                </div>
                <div className={style['house_name']}><span>{this.props.data.name}</span></div>
            </div>
        );  
    }
}
export default  UnionItem;