import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './WithDraw.css';
class WithDraw extends Component {
    constructor (...args) {
        super (...args);
        this.state = {
            radioValue: '',                       //单选按钮的值
            price: 0                       //记录提现金额
        };
    }
    static propTypes = {
        type: PropTypes.string,
        aaa: PropTypes.func
    }
    handleChange = (e) => {            //单选按钮函数
        this.setState({
            radioValue: e.target.value
        });
    }
    fnWithCash = (ev) => {
        this.setState({ price: ev.target.value });
    }
    fnEnsure = () => {
        if (this.state.radioValue === "") {
            console.log("请选择提现账号");
        } else if (this.state.price === 0) {
            console.log("请输入提现金额");
        } else {
            console.log(`你选择了${this.state.radioValue}账号,提现金额${this.state.price}`);
        }
    }
    render () {
        let bankText = [
            { name: "公司账户", carid: "61285479654478923678", value: "gongsi", idname: "company" },
            { name: "法人账号", carid: "61285479654478923678", value: "faren", idname: "corporation" }
        ];
        let liComp = (
            bankText.map( (item, index) => {
                return (
                    <li key={index}>
                        <label htmlFor={item.idname} className={ this.state.radioValue === item.value ? "active" : "" }></label>
                        <input
                            type="radio"
                            name="account"
                            value={item.value}
                            id={item.idname}
                            onChange={this.handleChange}
                        />
                        {item.name}[{item.carid}]
                    </li>
                )
            } )
        );
        return (
            <div id="withDraw" style={{ display: this.props.type }}>
                <div className="box">
                    <h3>提现</h3>
                    <p>选择提现账户：</p>
                    <ul>
                        {liComp}
                    </ul>
                    <p>请输入提现金额：</p>
                    <div className="text" onChange={ this.fnWithCash }>
                        <input type="text"/>元
                    </div>
                    <a href="javascript:;" className="reset" onClick={this.props.aaa}>取消</a>
                    <a href="javascript:;" className="ensure" onClick={this.fnEnsure} >确定</a>
                </div>
            </div>

        );
    }
}
export default WithDraw
