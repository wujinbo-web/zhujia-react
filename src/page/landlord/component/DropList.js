import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './DropList.css';

class DropList extends Component {
    constructor (...args) {
        super (...args);
        this.state = {
            dropList: false,
            value: ""
        };
    }
    static propTypes={
        data: PropTypes.object,
        handleStore: PropTypes.func
    }
    fnClick = () => {
        this.setState( { dropList: !this.state.dropList } );
    }
    fnSetValue = (str) => {
        this.setState( { value: str } );
        this.props.handleStore(str);
    }
    render() {
        let listCom = (
            this.props.data.list.map((item, index) => {
                return (
                    <li key={index} onClick={ () => { this.fnSetValue( item ) }} className={ this.state.value === item ? "active" : "" }>{ item }</li>
                )
            })
        );
        return (
            <div id="droplist" onClick={this.fnClick} style={{ color: this.state.value == "" ? "#ccc" : "#333" }} >
                { this.state.value == "" ? this.props.data.title : this.state.value }
                <ul className="drop" style={{ display: this.state.dropList ? "block" : "none"   }}>
                    {listCom}
                </ul>
            </div>
        )
    }
}
export default DropList
