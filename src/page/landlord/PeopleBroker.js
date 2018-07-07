import React, { Component } from 'react';
import Header from './component/Header';
import pageStyle from '../page2.scss';
import Search from '../../component/common/Search';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './PeopleStore.css';
class PeopleBroker extends Component {
    constructor (...args) {
        super (...args);
    }
    static propTypes={
        history: PropTypes.object
    }
    componentDidMount() {
        document.title = window.SITE_NAME + ' - ' + '人员';
    }
    fnHref = () => {
        this.props.history.push('/peoplestore');
    }
    render() {
        const aText = [
            { storeName: "明锐直营店", userName: "M123456", name: "张永利", housing: "4", byStages: "5", contractNumber: "65" },
            { storeName: "门店:临平店", userName: "M123457", name: "朱书龙", housing: "5", byStages: "5", contractNumber: "65" },
            { storeName: "门店:西湖店", userName: "M123458", name: "张永利", housing: "3", byStages: "5", contractNumber: "65" },
            { storeName: "门店:文海店", userName: "M123459", name: "朱书龙", housing: "1", byStages: "5", contractNumber: "65" },
            { storeName: "门店:萧山店", userName: "M123460", name: "张永利", housing: "9", byStages: "5", contractNumber: "65" }
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
                        <strong>{item.name}</strong>
                    </ul>
                )
            })
        );
        return (
            <div className={pageStyle['page']}>
                <React.Fragment>
                    <div className={"box"} id="peoplestore">
                        <div className="menu">
                            <span>经济人</span>
                            <strong className="str" onClick={this.fnHref}>门店</strong>
                            <a href="#/openbroker">开通经纪人账号</a>
                        </div>
                        <div className="sear">
                            <a href="javascript:;" className="store">门店</a>
                            <div className="form">
                                <Search title="账号查询" />
                            </div>
                        </div>
                        {listComp}
                    </div>
                </React.Fragment>
            </div>
        )
    }
}

export default PeopleBroker
