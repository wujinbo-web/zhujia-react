import React, { Component } from 'react';
import Header from './component/Header';
import WithDraw from './component/WithDraw';
import Search from '../../component/common/Search';
import pageStyle from '../page2.scss';
import './ServiceFinance.css';
class ServiceFinance extends Component {
    constructor (...args) {
        super (...args);
        this.state = {
            cash: 'block',
            wrap: 'none',
            finance_type: 'type',
            withdraw: 'none'
        };
    }
    componentDidMount() {
        document.title = window.SITE_NAME + ' - ' + '财务';
    }
    fnWithCash = () => {
        this.setState({ withdraw: 'block' });
    }
    fnReset = () => {
        this.setState({ withdraw: 'none' });
    }
    fnSearch = () => {
        if ( this.state.cash === 'block' ) {
            this.setState({ cash: 'none', wrap: 'block', finance_type: 'active' });
        } else {
            this.setState({ cash: 'block', wrap: 'none', finance_type: 'type' });
        }

    }
    render () {
        let textList = [
            { type: "房租", time: "2018-03-08 15:25", info: "王晓晓/15268975482", balance: "53777.03", trade: "+0.01" },
            { type: "房租", time: "2018-03-9 15:25", info: "王晓晓/15268975482", balance: "53777.03", trade: "-0.01" },
            { type: "房租", time: "2018-03-08 15:25", info: "王晓晓/15268975482", balance: "53777.03", trade: "+0.01" }
        ];
        let financeType = [
            { name: "全部", url: '#' },
            { name: "房租", url: '#' },
            { name: "收佣", url: '#' },
            { name: "附佣", url: '#' },
            { name: "维修", url: '#' },
            { name: "分期首付房租", url: '#' },
            { name: "房租分期手续费", url: '#' },
            { name: "房租分期冻结", url: '#' },
            { name: "房租分期押金冻结", url: '#' },
            { name: "分期押金冻结", url: '#' },
            { name: "分期房租冻结", url: '#' },
            { name: "押金退还租客", url: '#' },
            { name: "退还剩余本金", url: '#' },
            { name: "银行分期手续费", url: '#' },
            { name: "银行分期首付房租", url: '#' }
        ];
        let listComp = (
            textList.map( ( item, index ) => {
                return (
                    <ul key={index} >
                        <li>财务类型：{item.type}</li>
                        <li>发生时间：{item.time}</li>
                        <li>对方信息：{item.info}</li>
                        <strong className={item.trade > 0 ? "active" : ""}>{item.balance}元</strong>
                        <span className={item.trade > 0 ? "active" : ""}>{item.trade}元</span>
                    </ul>
                )
            })
        );
        let arr = [];
        let arr2 = [];
        financeType.forEach((item, index) => {
            arr.push(item);
            if ( index % 3 === 2 ) {
                arr2.push(arr);
                arr = [];
            } else if ( index === financeType.length - 1 ) {
                arr2.push(arr);
                arr = [];
            }
        });
        let typeComp = (
            arr2.map( ( row, index ) => {
                return (
                    <tr key={index}>
                        {
                            row.map((item, num) => {
                                return (
                                    <td key={num}><a href={item.url}>{item.name}</a></td>
                                )
                            })
                        }
                    </tr>
                )
            })
        );

        return (
            <div className={pageStyle['page']} id="servicefinance">
                <React.Fragment>
                    <div className={"box"}>
                        <WithDraw type={this.state.withdraw} aaa={this.fnReset} />
                        <div style={{ display: this.state.cash }}>
                            <div className={"cash"} >
                                可用余额：<span>5897645.25元</span>
                                <a href="javascript:;" onClick={ this.fnWithCash }>提现</a>
                            </div>
                            <div className="blank"></div>
                        </div>
                        <div className="finance_type">
                            <a
                                href="javascript:;"
                                className={this.state.finance_type}
                                onClick={ this.fnSearch }
                            >财务类型</a>
                            <div className={"form"}>
                                <Search title="精确查询"/>
                            </div>
                        </div>
                        <div className={"list"}>
                            {listComp}
                        </div>
                        <div className="wrap" style={{ display: this.state.wrap }}>
                            <div className="content">
                                <table>
                                    <tbody>
                                        {typeComp}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            </div>
        )
    }
}
export default ServiceFinance
