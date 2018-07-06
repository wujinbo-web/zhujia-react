import React, { Component } from 'react';
import Header from './component/Header';
import pageStyle from '../page2.scss';
import './PeopleStore.css';
class PeopleStore extends Component {
    constructor (...args) {
        super (...args);
    }
    componentDidMount() {
        document.title = window.SITE_NAME + ' - ' + '人员';
    }
    render() {
        const aText = [
            { storeName: "门店:拱墅店", userName: "M123456", price: "1558967", housing: "4", byStages: "5", contractNumber: "65" },
            { storeName: "门店:临平店", userName: "M123457", price: "5555555", housing: "5", byStages: "5", contractNumber: "65" },
            { storeName: "门店:西湖店", userName: "M123458", price: "666666", housing: "3", byStages: "5", contractNumber: "65" },
            { storeName: "门店:文海店", userName: "M123459", price: "222222", housing: "1", byStages: "5", contractNumber: "65" },
            { storeName: "门店:萧山店", userName: "M123460", price: "333333", housing: "9", byStages: "5", contractNumber: "65" }
        ];
        let listComp = (
            aText.map( item => {
                return (
                    <ul className="list" key={item.userName}>
                        <span>上架房源：{item.housing}</span>
                        <span>分期：{item.byStages}</span>
                        <span>签约合同：{item.contractNumber}</span>
                        <li className="dian">{item.storeName}</li>
                        <li className="user">账号：{item.userName}</li>
                        <strong>{item.price}元</strong>
                    </ul>
                )
            })
        );
        return (
            <div className={pageStyle['page']}>
                <React.Fragment>
                    <div className={"box"} id="peoplestore">
                        <Header title="人员" />
                        <div className="menu">
                            <span>门店</span>
                            <strong>经济人</strong>
                            <a href="javascript:;">开通门店账号</a>
                        </div>
                        {listComp}
                    </div>
                </React.Fragment>
            </div>
        )
    }
}

export default PeopleStore
