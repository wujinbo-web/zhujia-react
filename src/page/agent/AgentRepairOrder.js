import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './agentRepairOrder.scss';
import pageStyle from '../page.scss';
import OrderItem from '../../component/common/OrderItem';

const datas = [
    ["师傅已到", "取消订单"],
    ["维修完成"],
    ["去付款"],
    []
]
const res = [
    {
        name: "朱大哥",
        position: "杭州凯旋路110号12345678",
        number: "12",
        type: "空调维修",
        state: "1"
    },
    {
        name: "朱大哥",
        position: "杭州凯旋路110号12345678",
        number: "12",
        type: "空调维修",
        state: "1"
    },
    {
        name: "朱大哥",
        position: "杭州凯旋路110号12345678",
        number: "12",
        type: "空调维修",
        state: "1"
    },
    {
        name: "朱大哥",
        position: "杭州凯旋路110号12345678",
        number: "12",
        type: "空调维修",
        state: "3"
    }
]
class AgentRepairOrder extends Component {
    state = {
        data_state: 0,
        buttons: datas[0],
        datas: []
    };

    heads = [];

    async componentDidMount() {
        document.title = window.SITE_NAME + ' - ' + '维修订单';
        this.heads[0].style = "color: #9ad7fd";
    }

    changeEvent(e) {
        this.cancelAll();
        this.state.datas = [];
        for (let i = 0; i < res.length; i++) {
            if (res[i].state === e + "") {
                this.state.datas.push(res[i]);
            }
        }
        this.setState({
            data_state: e,
            buttons: datas[e]
        });
        this.heads[e].style = "color: #9ad7fd";
        this.slider.style = "left: " + (e * 25 + 5) + "%";
        
    }

    cancelAll() {
        for (let i = 0; i < this.heads.length; i++) {
            this.heads[i].style = "color: #999";
        }
    }

    getItem = (data, i) => {
        if (data.state === this.state.data_state + "") return  <OrderItem key={i} datas={data} buttons={this.state.buttons} />
    }

    render() {
        
        return (
            <div className={pageStyle['page']}>
                <React.Fragment>
                    <div className={style['header']}>
                        <div className={style['header_title']}>
                            <div onTouchStart={(e) => this.changeEvent(0)} ref={(ref) => this.heads[0] = ref}><span>派单中</span></div>
                            <div onTouchStart={(e) => this.changeEvent(1)} ref={(ref) => this.heads[1] = ref}><span>维修中</span></div>
                            <div onTouchStart={(e) => this.changeEvent(2)} ref={(ref) => this.heads[2] = ref}><span>待支付</span></div>
                            <div onTouchStart={(e) => this.changeEvent(3)} ref={(ref) => this.heads[3] = ref}><span>已完成</span></div>
                        </div>
                        <div className={style['slider']}><div ref={(ref) => this.slider = ref} ></div></div>
                    </div>
                    <div className={style['item_box']}>
                        {this.state.datas.length > 0 ? this.state.datas.map(this.getItem) : <div className={pageStyle['nothing']}><div><img src="/static/nothing/wudingdan.png"/><span>暂无数据</span></div></div>}
                    </div>
                </React.Fragment>
            </div>
        );
    }
}
export default AgentRepairOrder;