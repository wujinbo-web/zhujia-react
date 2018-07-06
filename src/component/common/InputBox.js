import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './inputBox.scss';

class InputBox extends Component {

    static propTypes={
        title: PropTypes.string,
        plac: PropTypes.string
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
            <div className={style['info_item']}>
                <div className={style['in_title']}><span>{this.props.title}</span></div>
                <div className={style['in_body']}><input type="text" placeholder={this.props.plac} onChange={(e) => this.changeEvent(e)}/></div>
            </div>
        );  
    }
}
export default InputBox;