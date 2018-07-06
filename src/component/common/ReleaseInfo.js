import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './releaseInfo.scss';
import Tag from './Tag';
class ReleaseInfo extends Component {
    static propTypes={
        datas: PropTypes.object,
        title: PropTypes.string,
        img: PropTypes.string,
        size: PropTypes.string,
        price: PropTypes.string,
        tag: PropTypes.array
    }
    render() {
        return (
            <div className={style['item']}>
                <div><img src={this.props.datas.img}/></div>
                <div className={style['item_contant']}>
                    <div className={style['item_title']}>
                        <div className={style['title']}>{this.props.datas.title}</div>
                        <div className={style['price']}>¥{this.props.datas.price}</div>
                    </div>
                    <div className={style['item_size']}>{this.props.datas.size}</div>
                    <Tag datas={this.props.datas.tag}/>
                    <div className={style['item_tenant']}>已选租客</div>
                </div>
                <div className={style['item_bottom']}>
                    <div className={style['delete']}>删除</div>
                    <div className={style['check']}>查看租客信息</div>
                </div>
            </div>
        )
    }
}
export default ReleaseInfo;