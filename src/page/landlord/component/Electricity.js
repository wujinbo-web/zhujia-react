import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Electricity.css'
class Electricity extends Component {
    constructor (...args) {
        super (...args);
    }
    static propTypes={
        num: PropTypes.number
    }
    render () {
        return (
            <span
                id="electric"
                className={ this.props.num < 50 ? "active" : "" }
                style={{ "background": `url('/static/union_store/dianliang${this.props.num}.png')`, backgroundSize: "2.1rem 2.1rem" }}>
                电量<br/>{this.props.num}%
            </span>
        )
    }
}
export default Electricity
