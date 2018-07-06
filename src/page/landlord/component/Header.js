import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Header.css';
class Header extends Component {
    constructor (...args) {
        super (...args);
    }
    static propTypes={
        title: PropTypes.string
    }
    fnReturn = () => {
        console.log("返回上一级页面");

    }
    render () {
        return (
            <div>
                <div id="box">
                    <div id="top">
                        <a href="javascript:;" className="return" onClick={this.fnReturn}></a>
                        { this.props.title }
                    </div>
                </div>
                <div id="blank"></div>
            </div>
        );
    }
}
export default Header
