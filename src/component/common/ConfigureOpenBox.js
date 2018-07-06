import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './configureOpenBox.scss';

const dict = [
    { name: "冰箱", uri: "/static/tenant/icon/bingxiang.png" },
    { name: "餐桌", uri: "/static/tenant/icon/canzhuo.png" },
    { name: "床", uri: "/static/tenant/icon/chuang.png" },
    { name: "电视", uri: "/static/tenant/icon/dianshi.png" },
    { name: "空调", uri: "/static/tenant/icon/kongtiao.png" },
    { name: "热水器", uri: "/static/tenant/icon/reshuiqi.png" },
    { name: "沙发", uri: "/static/tenant/icon/shafa.png" },
    { name: "书桌", uri: "/static/tenant/icon/shuzhuo.png" },
    { name: "洗衣机", uri: "/static/tenant/icon/xiyiji.png" },
    { name: "衣柜", uri: "/static/tenant/icon/yigui.png" },
    { name: "椅子", uri: "/static/tenant/icon/yizi.png" }
]
class ConfigureBox extends Component {

    static propTypes={
        datas: PropTypes.array,
        changeEvent: PropTypes.func
    }

    getImgUri(e) {
        for (let i = 0; i < dict.length; i++) {
            if (dict[i].name === e) {
                return <div><img src={dict[i].uri}/></div>;
            }
        }   
    }

    getListItem = (data, i) => {
        return <div key={i} className={style['tag_v']}>{this.getImgUri(data)}<div><span>{ data }</span></div></div>
    }

    render() {
        return (
            <div className={style['con']}>
                {this.props.datas.map(this.getListItem)}
                
            </div>
        );  
    }
}
export default ConfigureBox;