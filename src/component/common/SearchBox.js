import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './searchBox.scss';

class SearchBox extends Component {

    static propTypes={
        text: PropTypes.string
    }
    state = { 
        value: ''
    };
    changeEvent (e) {
        this.setState({
            value: e.target.value
        });
    }
    render() {
        return (
            <div className={style['search_box']}>
                <div className={style['input_box']}><input type="text" onChange={(e) => this.changeEvent(e)} placeholder="请输入要搜索的关键字"/></div>
                <div className={style['img_box']}><img src="/static/union_store/fangyuansousuo.png" /></div>
            </div>
        );  
    }
}
export default SearchBox;