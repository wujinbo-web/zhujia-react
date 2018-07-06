import React, { Component } from 'react';
import propTypes from 'prop-types';
import './Search.css';
class Search extends Component {
    constructor (...args) {
        super (...args)
    }
    static propTypes = {
        title: propTypes.string
    }
    render () {
        return (
            <div id={'search'}>
                <input type="text" placeholder={ this.props.title } className={'text'} />
                <a href="javascript:;" className={'search'} >搜索</a>
            </div>
        )
    }
}
export default Search
