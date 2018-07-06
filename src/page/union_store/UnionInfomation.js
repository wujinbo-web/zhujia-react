import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './unionInfomation.scss';
import pageStyle from '../page.scss';
import HiddenInputBox from '../../component/common/HiddenInputBox';

class UnionInfomation extends Component {

    async componentDidMount() {
        document.title = window.SITE_NAME + ' - ' + '房源详情';
        this.hiddenbox1.state.visibility = "hidden";
        this.hiddenbox2.state.visibility = "hidden";
        this.cover.style = "visibility: hidden";
        
    }

    onsubmit = () => {

    }

    yajindongjie = () => {
        this.hiddenbox1.state.visibility = "visible";
        this.hiddenbox1.componentDidMount();
        this.cover.style = "visibility: visible";
    }

    yajinjiedong = () => {
        this.hiddenbox2.state.visibility = "visible";
        this.hiddenbox2.componentDidMount();
        this.cover.style = "visibility: visible";
    }

    hiddenAll = () => {
        this.hiddenbox1.state.visibility = "hidden";
        this.hiddenbox1. componentDidMount();
        this.hiddenbox2.state.visibility = "hidden";
        this.hiddenbox2. componentDidMount();
        this.cover.style = "visibility: hidden";
    }

    render() {
        const res = {
            name: "张超",
            price: "1500",
            todate: "2018-5-23至2019-5-23",
            phone: "15566668888",
            type: "月付"
        }
        return (
            <div className={pageStyle['background_color']}>
                <React.Fragment>
                    <div className={style['content']}>
                        <div className={style['info']}> 
                            <div><img src="/static/union_store/zuke.png" /><span>租客:</span><span>{res.name}</span></div>
                            <div><img src="/static/union_store/zujin.png" /><span>租金:</span><span>{res.price}元</span></div>
                            <div><img src="/static/union_store/zuqi.png" /><span>租期:</span><span>{res.todate}</span></div>
                            <div><img src="/static/union_store/dianhua.png" /><span>电话:</span><span>{res.phone}</span></div>
                            <div><img src="/static/union_store/fukuan.png" /><span>付款:</span><span>{res.type}</span></div>
                        </div>
                        <HiddenInputBox title="押金冻结" submitEvent={this.onsubmit} ref={(ref) => this.hiddenbox1 = ref}/>
                        <HiddenInputBox title="租金解冻" submitEvent={this.onsubmit} ref={(ref) => this.hiddenbox2 = ref}/>
                        <div className={style['cover_box']} ref={(ref) => this.cover = ref} onTouchStart={this.hiddenAll}/>
                        <div className={style['buttons']}>
                            <div>
                                <div className={style['button_box']}>
                                    <div className={style['text']}><span>1500元</span></div>
                                    <div className={style['button']} onTouchStart={this.yajindongjie}><span>押金冻结</span></div>
                                </div>
                                <div className={style['button_box']}>
                                    <div className={style['text']}><span>28600元</span></div>
                                    <div className={style['button']} onTouchStart={this.yajinjiedong}><span>租金解冻</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            </div>
        );
    }
}
export default UnionInfomation;