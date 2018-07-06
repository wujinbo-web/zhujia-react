import React, { Component } from 'react';
import PropTypes from 'prop-types';
const mun = [
    { state: "正常", color: "#fff" },
    { state: "逾期", color: "#fe38cd" },
    { state: "分期", color: "#dcb211" },
    { state: "欠费", color: "#fa222c" },
    { state: "一个月到期", color: "#0ab858" }
]
class ContractState extends Component {

    static propTypes={
        state: PropTypes.string
    }

    async componentDidMount() {
        for (let i = 0; i < mun.length; i++) {
            if (mun[i].state === this.props.state) this.text.style = "color: " + mun[i].color;
        }
    }
    
    render() {    
        return <span ref={(ref) => this.text = ref}>{this.props.state}</span>
    }
}
export default ContractState;