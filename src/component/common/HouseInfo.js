import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './houseInfo.scss';
import Tag from './Tag';
class HouseInfo extends Component {
    static propTypes={
        datas: PropTypes.object,
        title: PropTypes.string,
        img: PropTypes.string,
        size: PropTypes.string,
        price: PropTypes.string,
        position: PropTypes.string,
        tag: PropTypes.array
    }
    render() {
        return (
            <div className={style['info']}>
                <div className={style['img_box']}><img src={ this.props.datas.img } /></div>
                <div className={style['info_house']}>
                    <div className={style['info_m']}>
                        <div className={style['info_title']}><span>{ this.props.datas.title }</span></div>
                        <div className={style['info_sp']}>
                            <div className={style['info_size']}>{ this.props.datas.size }</div>
                            <div className={style['info_price']}>{ this.props.datas.price }</div>
                        </div>
                        <div className={style['info_position']}><div><img src="/static/manage/tianxiedizhi.png"/></div><div>{ this.props.datas.position }</div></div>
                    </div>
                    <div className={style['info_t']}>
                        <Tag datas={ this.props.datas.tag }/>
                    </div>
                </div>
            </div>
        )
    }
}
export default HouseInfo;